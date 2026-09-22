// DRAFT HOME COPY — PENDING CLIENT APPROVAL.
// The client document has no dedicated Home copy. Everything here is built from
// the About Us text (about.js), the Our Work / Get Involved content and
// siteConfig.js, plus the button labels and section headings taken from the
// development plan. Do not show this as final until the client approves it
// (needsApproval). Nothing on the page tells visitors it is a draft.

import { history, missionVisionValues } from './about'
import { involveOverview, involvePages } from './involve'
import { donateLink, navConfig } from './navConfig'
import { siteConfig } from './siteConfig'
import { workOverview, workPages } from './work'

// Base paths of the two menu sections, read from the menu configuration.
const sectionPath = (title) =>
  navConfig.find((item) => item.label === title)?.path
const workPath = sectionPath(workOverview.title)
const involvePath = sectionPath(involveOverview.title)

// First sentence of a paragraph, verbatim (bold markers kept).
const firstSentence = (text) => text.split(/(?<=\.)\s/)[0]

// First sentence of the last History paragraph, verbatim (bold phrases kept):
// "Today, Equip Foundation builds on its journey of more than two decades with
// a continued commitment to **human dignity, social justice, empowerment and
// sustainable development**."
const historyExcerpt = firstSentence(history.paragraphs.at(-1))

const sinceLabel = 'Since'
const covidLabel = 'COVID-19 response'

// The COVID-19 response text from the Humanitarian Aid page (first sentence).
const covidSection = workPages
  .find((page) => page.slug === 'humanitarian-aid')
  ?.sections.find((section) => section.title === covidLabel)

const { impact } = siteConfig
const volunteerPage = involvePages.find((page) => page.slug === 'volunteer')

export const home = {
  needsApproval: true,
  hero: {
    // The Vision statement.
    headline: missionVisionValues.vision.text,
    sinceLabel,
    // "Equip Foundation · Tirukoilur, Tamil Nadu · Since 2005"
    tagline: [
      siteConfig.name,
      siteConfig.address.place,
      `${sinceLabel} ${impact.established}`,
    ].join(' · '),
    // The Donate button comes from navConfig.js (donateLink).
    secondaryCta: { label: 'See Our Work', path: workPath },
  },
  intro: {
    text: historyExcerpt,
  },
  // The Mission statement, verbatim from about.js.
  mission: missionVisionValues.mission,

  // ---- Task 3.2 ----------------------------------------------------------
  // Focus areas: the 8 Our Work pages, title-only cards (the client document
  // has no one-line description for them). Titles and slugs come from work.js.
  focusAreasTitle: workOverview.title,
  focusAreas: workPages.map(({ title, slug }) => ({
    title,
    to: `${workPath}/${slug}`,
  })),

  // Impact: only facts the client supplied (siteConfig.impact). No statistics.
  impact: {
    title: 'Impact',
    stats: [
      { label: 'Established', value: impact.established },
      { label: 'Registered', value: impact.registered },
    ],
    disastersTitle: 'Disaster responses',
    disasters: impact.disasters,
    covid: impact.covidResponse
      ? { label: covidLabel, text: firstSentence(covidSection?.body[0] ?? '') }
      : null,
  },

  // Five values, verbatim from about.js.
  valuesTitle: missionVisionValues.valuesTitle,
  values: missionVisionValues.values,

  // Get Involved band. Destinations come from the menu configuration.
  // Reusable: any page can import this and pass it to <CTABand />.
  // Title is Task 6.3's "Ways to get involved" heading. Kept as a literal
  // here (not imported from content/program.js) because that module already
  // imports this one for programCta.actions — importing back would be a
  // circular import. Keep the two strings in sync by hand.
  involveBand: {
    title: 'Ways to get involved',
    actions: [
      { label: donateLink.label, to: donateLink.path, variant: 'donate' },
      {
        label: volunteerPage.title,
        to: `${involvePath}/${volunteerPage.slug}`,
        variant: 'primary',
      },
      {
        label: 'Partner',
        to: `${involvePath}/partnership`,
        variant: 'outline',
      },
    ],
  },
}
