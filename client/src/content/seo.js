// Per-route SEO metadata (Task 8.1): one { title, description } per public
// route, keyed by path exactly as they appear in navConfig.js's `allPaths`.
// Descriptions are derived from existing approved client copy wherever it
// exists (never invented), trimmed to a normal meta-description length.
// Consumed by scripts/prerender.mjs (build-time <title>/meta/OG/canonical)
// and by ScrollToTop.jsx (keeps the tab title correct after client-side
// navigation between the pre-rendered pages).
import { approach, history, missionVisionValues } from './about'
import { contact } from './contact'
import { home } from './home'
import { involveOverview, involvePages } from './involve'
import { reports } from './reports'
import { siteConfig } from './siteConfig'
import { team } from './team'
import { workOverview, workPages } from './work'

const SITE = siteConfig.name
const MAX_LENGTH = 155

// Strips the **bold** markers used throughout the content files.
const plain = (text) => (text ?? '').replace(/\*\*/g, '')

// First sentence of a paragraph (a full stop followed by whitespace), plain.
const firstSentence = (text) => plain(text).split(/(?<=\.)\s/)[0]

// Trims to a normal meta-description length at a word boundary, never mid-word.
function truncate(text, max = MAX_LENGTH) {
  const clean = text.trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max)
  return cut.slice(0, cut.lastIndexOf(' ')).trimEnd() + '…'
}

const workPath = '/work'
const involvePath = '/get-involved'

// The lead paragraph of a Work page: pages use either `intro`, `approach`
// (chips-only pages) or a first `sections[].body`, depending on their shape
// (see content/work.js).
const workLead = (page) =>
  page.intro?.[0] ?? page.approach?.[0] ?? page.sections?.[0]?.body?.[0] ?? ''

const workPageEntries = Object.fromEntries(
  workPages.map((page) => [
    `${workPath}/${page.slug}`,
    {
      title: `${page.title} — ${workOverview.title} — ${SITE}`,
      description: truncate(firstSentence(workLead(page))),
    },
  ]),
)

const involvePageEntries = Object.fromEntries(
  involvePages.map((page) => [
    `${involvePath}/${page.slug}`,
    {
      title: `${page.title} — ${involveOverview.title} — ${SITE}`,
      description: truncate(firstSentence(page.body?.[0] ?? '')),
    },
  ]),
)

export const seo = {
  '/': {
    title: `${SITE} — ${home.hero.headline}`,
    description: truncate(plain(home.intro.text)),
  },
  '/about/history': {
    title: `${history.title} — ${SITE}`,
    description: truncate(firstSentence(history.paragraphs[0])),
  },
  '/about/mission-vision-values': {
    title: `${missionVisionValues.title} — ${SITE}`,
    description: truncate(
      `${plain(missionVisionValues.vision.text)} ${plain(missionVisionValues.mission.text)}`,
    ),
  },
  '/about/approach': {
    title: `${approach.title} — ${SITE}`,
    description: truncate(firstSentence(approach.blocks[0].text)),
  },
  '/about/team': {
    title: `Our Team — ${SITE}`,
    description: truncate(
      `Meet the ${team.trustees.length}-member ${team.boardTitle} of ${SITE}.`,
    ),
  },
  '/about/annual-reports': {
    title: `Annual Reports — ${SITE}`,
    description: truncate(
      `${SITE} annual reports, from ${reports.at(-1).label} to ${reports[0].label}.`,
    ),
  },
  [workPath]: {
    title: `${workOverview.title} — ${SITE}`,
    description: truncate(
      `${SITE}'s programme areas: ${workPages.map((p) => p.title).join(', ')}.`,
    ),
  },
  ...workPageEntries,
  [involvePath]: {
    title: `${involveOverview.title} — ${SITE}`,
    description: truncate(firstSentence(involveOverview.intro)),
  },
  ...involvePageEntries,
  '/contact': {
    title: `${contact.title} — ${SITE}`,
    description: truncate(firstSentence(contact.sections.enquiry.text)),
  },
}
