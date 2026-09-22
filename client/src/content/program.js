// Shared text for the ProgramPage template (Our Work pages now, and reusable
// for other pages such as Get Involved). Headings and the CTA title are the
// wording from the development plan; the CTA buttons reuse the Home band's
// actions (Donate, Volunteer, Partner) so every page sends people to the same
// places. Any of these can be overridden per page through ProgramPage props.

import { home } from './home'
import { involveOverview, involvePages } from './involve'
import { navConfig } from './navConfig'

export const programLabels = {
  intro: 'Why this matters',
  approach: 'What Equip Foundation does',
  focus: 'Key focus',
  related: 'Related pages',
}

export const programCta = {
  title: 'Support this work',
  actions: home.involveBand.actions,
}

// "Ways to get involved" cross-link band (Task 6.3): links to all 8 Get
// Involved pages, added at the bottom of every Our Work page. Titles and
// slugs come from content/involve.js; the base path from navConfig.js.
// NOTE: this module already imports home.js (above), so home.js cannot import
// this title back (that would be a circular import) — the same literal string
// is kept in content/home.js for the Home CTA band's own heading.
const involvePath = navConfig.find(
  (item) => item.label === involveOverview.title,
)?.path

export const waysToGetInvolved = {
  title: 'Ways to get involved',
  items: involvePages.map(({ title, slug }) => ({
    title,
    to: `${involvePath}/${slug}`,
  })),
}
