import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Button,
  Card,
  Field,
  PageHero,
  RichText,
  Section,
  fieldClass,
} from '../components/ui'
import { contact, engagementOptions } from '../content/contact'
import { isPlaceholder, siteConfig } from '../content/siteConfig'

// Simple line icons (Feather, MIT licence), keyed by siteConfig.socials[].id.
// Duplicated from components/layout/Footer.jsx (kept separate on purpose —
// Task 7.2 must not modify the global Footer).
const socialIcons = {
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <path d="m9.75 15.02 5.75-3.27-5.75-3.27z" />
    </>
  ),
}

const { address } = siteConfig
const mapQuery = encodeURIComponent(
  `${address.organisation}, ${address.line1} ${address.line2} ${address.pin}`,
)
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[6-9]\d{9}$/
const normalizePhone = (value) => value.replace(/[\s\-.()]/g, '')

const engagementValues = engagementOptions.map((o) => o.value)

const emptyValues = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  engagementType: 'general',
  [contact.form.honeypotField]: '',
}

function validate(values) {
  const errors = {}
  const { messages, messageMaxLength } = contact.form

  if (!values.name.trim()) errors.name = messages.requiredName
  if (!values.email.trim()) errors.email = messages.requiredEmail
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = messages.invalidEmail
  if (!values.message.trim()) errors.message = messages.requiredMessage
  else if (values.message.trim().length > messageMaxLength)
    errors.message = messages.messageTooLong
  if (
    values.phone.trim() &&
    !PHONE_RE.test(normalizePhone(values.phone.trim()))
  )
    errors.phone = messages.invalidPhone

  return errors
}

// Contact Us: Our Office (address + map), Contact Details, Social Media and
// the Enquiry form, which posts to the Task 7.1 endpoint (POST /api/enquiry).
export default function Contact() {
  const [searchParams] = useSearchParams()
  const requestedType = searchParams.get('type')
  const initialType = engagementValues.includes(requestedType)
    ? requestedType
    : 'general'

  const [values, setValues] = useState({
    ...emptyValues,
    engagementType: initialType,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const { email, phone } = siteConfig.contact
  const showEmail = !isPlaceholder(email)
  const showPhone = !isPlaceholder(phone)
  const activeSocials = siteConfig.socials.filter(
    (social) => !isPlaceholder(social.url),
  )
  const fields = contact.form.fields

  const setField = (name) => (e) =>
    setValues((v) => ({ ...v, [name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Spam guard: a filled honeypot means this submit didn't come from the
    // real visible form. Silently do nothing further (matches the backend's
    // own honeypot behaviour of never confirming to a bot what happened).
    if (values[contact.form.honeypotField]) return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          organisation: values.organisation.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          engagementType: values.engagementType,
          [contact.form.honeypotField]: '',
        }),
      })

      let data = null
      try {
        data = await res.json()
      } catch {
        data = null
      }

      if (res.ok && data?.success) {
        setStatus('success')
        setValues({ ...emptyValues, engagementType: initialType })
        return
      }

      if (res.status === 429) {
        setStatus('error')
        setErrorMessage(data?.error || contact.form.messages.rateLimited)
        return
      }

      setStatus('error')
      setErrorMessage(
        data?.error ||
          (showEmail
            ? contact.form.messages.genericWithEmail(email)
            : contact.form.messages.genericNoEmail),
      )
    } catch {
      setStatus('error')
      setErrorMessage(contact.form.messages.network)
    }
  }

  return (
    <>
      <PageHero title={contact.title} />

      <Section
        id={contact.sections.office.id}
        title={contact.sections.office.title}
        intro={contact.sections.office.text}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <Card padding="lg">
            <address className="not-italic text-body text-ink">
              <p className="font-heading text-lead font-semibold">
                {address.organisation}
              </p>
              <p className="mt-2">{address.line1}</p>
              <p>{address.line2}</p>
              <p>
                {contact.labels.pin} {address.pin}
              </p>
            </address>
          </Card>
          <Card padding="none" className="overflow-hidden">
            <iframe
              title={contact.sections.office.mapTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 sm:h-80 lg:h-full lg:min-h-72"
            />
          </Card>
        </div>
      </Section>

      <Section
        id={contact.sections.details.id}
        tone="muted"
        title={contact.sections.details.title}
        intro={contact.sections.details.text}
      >
        <Card padding="lg" className="grid gap-6 sm:grid-cols-2">
          {showEmail && (
            <div>
              <p className="text-small font-semibold tracking-wide text-ink-muted uppercase">
                {contact.labels.email}
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-1 block text-lead font-medium text-brand-700 underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </div>
          )}
          {showPhone && (
            <div>
              <p className="text-small font-semibold tracking-wide text-ink-muted uppercase">
                {contact.labels.phone}
              </p>
              <a
                href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                className="mt-1 block text-lead font-medium text-brand-700 underline-offset-4 hover:underline"
              >
                {phone}
              </a>
            </div>
          )}
          <div className="sm:col-span-2">
            <p className="text-small font-semibold tracking-wide text-ink-muted uppercase">
              {contact.labels.address}
            </p>
            <address className="mt-1 not-italic text-body text-ink">
              {address.line1} {address.line2} {contact.labels.pin} {address.pin}
            </address>
          </div>
        </Card>
      </Section>

      <Section
        id={contact.sections.social.id}
        title={contact.sections.social.title}
        intro={contact.sections.social.text}
      >
        {activeSocials.length > 0 && (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeSocials.map(({ id, label, url }) => (
              <li key={id}>
                <Card
                  as="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  hoverable
                  className="flex items-center gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {socialIcons[id]}
                    </svg>
                  </span>
                  <span className="font-semibold text-ink">
                    {label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        )}
        {contact.sections.social.closing && (
          <RichText
            text={contact.sections.social.closing}
            className="mt-8 max-w-narrow text-ink-muted"
          />
        )}
      </Section>

      <Section id={contact.sections.enquiry.id} tone="muted" title="Enquiry">
        <RichText
          text={contact.sections.enquiry.text}
          className="max-w-narrow text-ink-muted"
        />
        <Card padding="lg" className="mt-8 max-w-narrow">
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot: real visitors never see this. Bots that fill every
                field in a scraped form will fill it too. */}
            <div
              aria-hidden="true"
              className="absolute h-0 w-0 overflow-hidden opacity-0"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values[contact.form.honeypotField]}
                onChange={setField(contact.form.honeypotField)}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label={fields.name} required error={errors.name}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={fieldClass(Boolean(errors.name))}
                  value={values.name}
                  onChange={setField('name')}
                />
              </Field>

              <Field id="organisation" label={fields.organisation}>
                <input
                  id="organisation"
                  type="text"
                  autoComplete="organization"
                  className={fieldClass(false)}
                  value={values.organisation}
                  onChange={setField('organisation')}
                />
              </Field>

              <Field
                id="email"
                label={fields.email}
                required
                error={errors.email}
              >
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={fieldClass(Boolean(errors.email))}
                  value={values.email}
                  onChange={setField('email')}
                />
              </Field>

              <Field
                id="phone"
                label={fields.phone}
                error={errors.phone}
                hint="10-digit Indian mobile number"
              >
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={fieldClass(Boolean(errors.phone))}
                  value={values.phone}
                  onChange={setField('phone')}
                />
              </Field>

              <Field
                id="subject"
                label={fields.subject}
                className="sm:col-span-2"
              >
                <input
                  id="subject"
                  type="text"
                  className={fieldClass(false)}
                  value={values.subject}
                  onChange={setField('subject')}
                />
              </Field>

              <Field
                id="engagementType"
                label={fields.engagementType}
                className="sm:col-span-2"
              >
                <select
                  id="engagementType"
                  className={fieldClass(false)}
                  value={values.engagementType}
                  onChange={setField('engagementType')}
                >
                  {engagementOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                id="message"
                label={fields.message}
                required
                error={errors.message}
                className="sm:col-span-2"
              >
                <textarea
                  id="message"
                  rows={5}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  className={fieldClass(Boolean(errors.message))}
                  value={values.message}
                  onChange={setField('message')}
                />
              </Field>
            </div>

            <div className="mt-6">
              {status === 'success' && (
                <p
                  role="status"
                  className="mb-4 rounded-button border border-accent-300 bg-accent-50 px-4 py-3 text-body text-accent-800"
                >
                  {contact.form.messages.success}
                </p>
              )}
              {status === 'error' && errorMessage && (
                <p
                  role="alert"
                  className="mb-4 rounded-button border border-red-300 bg-red-50 px-4 py-3 text-body text-red-700"
                >
                  {errorMessage}
                </p>
              )}
              <Button
                type="submit"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
              >
                {status === 'submitting'
                  ? contact.form.submittingLabel
                  : contact.form.submitLabel}
              </Button>
            </div>
          </form>
        </Card>
      </Section>
    </>
  )
}
