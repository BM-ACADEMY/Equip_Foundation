// The ONLY backend for the Equip Foundation website: a single endpoint that
// forwards Contact form enquiries to the Foundation's mailbox by email.
// Nothing here reads or writes a database and nothing is persisted — every
// request either becomes one outgoing email, or is rejected.
import { fileURLToPath } from 'node:url'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { rateLimit } from 'express-rate-limit'
import nodemailer from 'nodemailer'

// Load server/.env regardless of the process's current working directory.
dotenv.config({ path: new URL('.env', import.meta.url) })

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO,
  ALLOWED_ORIGIN,
  PORT = 4000,
  NODE_ENV,
  TRUST_PROXY,
} = process.env

const app = express()

// Only relevant when deployed behind a reverse proxy (e.g. Nginx, Render,
// Railway) — without it, express-rate-limit would key every request off the
// proxy's own IP instead of the visitor's. Off by default; set TRUST_PROXY=1
// (or a proxy count) in the deployment environment if one sits in front of
// this server.
if (TRUST_PROXY) app.set('trust proxy', Number(TRUST_PROXY) || TRUST_PROXY)

// CORS is locked to the site's own frontend origin (ALLOWED_ORIGIN), read
// from the environment rather than hardcoded so it can differ per
// deployment. Requests with no Origin header (curl, server-to-server calls)
// are let through — CORS only ever restricts browser-initiated cross-origin
// requests, so this doesn't weaken anything. In non-production, any
// http://localhost:<port> origin is also allowed so the Vite dev server can
// reach this API without needing a second env var during development.
const corsOptions = {
  origin(origin, callback) {
    const isAllowed =
      !origin ||
      origin === ALLOWED_ORIGIN ||
      (NODE_ENV !== 'production' && /^http:\/\/localhost:\d+$/.test(origin))
    callback(isAllowed ? null : new Error('Not allowed by CORS'), isAllowed)
  },
}
app.use(cors(corsOptions))
app.use(express.json({ limit: '20kb' }))

// In-memory rate limiter: 5 requests / 15 minutes / IP (overridable only for
// the test suite, which needs to exercise many non-rate-limit scenarios
// against one server instance/IP without tripping the real limit). Resets
// whenever the server process restarts and is only correct for a single
// server instance (no shared store) — that is intentional for this task's
// scope; a multi-instance deployment would need a shared store (e.g. Redis)
// instead.
const enquiryLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  limit: Number(process.env.RATE_LIMIT_MAX) || 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      error: 'Too many enquiries from this device. Please try again in a few minutes.',
    })
  },
})

// The hidden form field bots fill in and real visitors never see or touch.
// The Contact form (Task 7.2) must render an input named "website" that is
// visually hidden and excluded from the tab order, and must never pre-fill it.
const HONEYPOT_FIELD = 'website'

const ENGAGEMENT_TYPES = [
  'general',
  'donate',
  'volunteer',
  'partnership',
  'training',
  'research',
  'campaign',
  'careers',
  'other',
]

const MAX_MESSAGE_LENGTH = 5000

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Reasonable-format Indian mobile number: strip spaces/hyphens/dots/
// parentheses only (no country-code stripping), then require exactly 10
// digits starting with 6, 7, 8 or 9.
function normalizePhone(phone) {
  return phone.replace(/[\s\-.()]/g, '')
}
const PHONE_RE = /^[6-9]\d{9}$/

// Strips characters that could be used to inject extra email headers.
// Belt-and-braces: the validation above already rejects values containing
// these, but this is applied again wherever a value reaches a header.
const stripHeaderChars = (value) => value.replace(/[\r\n]/g, '')

function validateEnquiry(body) {
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  if (!name) return { error: 'Please provide your name.' }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!email || !EMAIL_RE.test(email)) {
    return { error: 'Please provide a valid email address.' }
  }

  const message = typeof body.message === 'string' ? body.message.trim() : ''
  if (!message) return { error: 'Please provide a message.' }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      error: `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`,
    }
  }

  let phone = ''
  if (body.phone != null && String(body.phone).trim() !== '') {
    const normalized = normalizePhone(String(body.phone).trim())
    if (!PHONE_RE.test(normalized)) {
      return {
        error: 'Please provide a valid 10-digit Indian mobile number.',
      }
    }
    phone = normalized
  }

  let engagementType = 'general'
  if (body.engagementType != null && String(body.engagementType).trim() !== '') {
    const value = String(body.engagementType).trim()
    if (!ENGAGEMENT_TYPES.includes(value)) {
      return { error: 'Please choose a valid enquiry type.' }
    }
    engagementType = value
  }

  const organisation =
    typeof body.organisation === 'string' ? body.organisation.trim() : ''
  const subject = typeof body.subject === 'string' ? body.subject.trim() : ''

  return { data: { name, email, message, phone, engagementType, organisation, subject } }
}

function buildMail({ name, email, message, phone, engagementType, organisation, subject }) {
  const safeName = stripHeaderChars(name)
  const bodyLines = [
    `Name: ${name}`,
    organisation && `Organisation: ${organisation}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    subject && `Subject: ${subject}`,
    `Engagement Type: ${engagementType}`,
    '',
    'Message:',
    message,
  ].filter((line) => line !== false && line !== undefined)

  return {
    to: MAIL_TO,
    replyTo: stripHeaderChars(email),
    subject: `[Website] ${engagementType} — ${safeName}`,
    text: bodyLines.join('\n'),
  }
}

// Real SMTP in normal use; nodemailer's built-in JSON transport (composes
// the message but sends nothing) when running under the test suite, so
// tests never deliver real email and need no live SMTP credentials.
const transporter =
  NODE_ENV === 'test'
    ? nodemailer.createTransport({ jsonTransport: true })
    : nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })

app.post('/api/enquiry', enquiryLimiter, async (req, res) => {
  const body = req.body ?? {}

  // Spam guard: a filled honeypot is never shown to real visitors. Respond
  // exactly as a genuine submission would, without validating anything else
  // or sending mail, so a bot learns nothing about why it was discarded.
  if (typeof body[HONEYPOT_FIELD] === 'string' && body[HONEYPOT_FIELD].trim() !== '') {
    return res.status(200).json({ success: true })
  }

  const { error, data } = validateEnquiry(body)
  if (error) return res.status(400).json({ success: false, error })

  try {
    const info = await transporter.sendMail({ from: SMTP_USER, ...buildMail(data) })
    // Test-only hook: jsonTransport (NODE_ENV=test) composes the message but
    // sends nothing. Printing it lets the test suite assert on the actual
    // to/replyTo/subject/body without a real mailbox or an extra endpoint.
    if (NODE_ENV === 'test') console.log('MAIL_JSON:' + info.message)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Failed to send enquiry email:', err)
    return res.status(500).json({
      success: false,
      error: `We couldn't send your enquiry right now. Please email us directly at ${MAIL_TO}.`,
    })
  }
})

// Only start listening when run directly (`node index.js`); importing this
// module (as the test script does) does not open a port.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => console.log(`Enquiry API listening on port ${PORT}`))
}

export default app
