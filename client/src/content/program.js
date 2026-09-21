// Shared text for the ProgramPage template (Our Work pages now, and reusable
// for other pages such as Get Involved). Headings and the CTA title are the
// wording from the development plan; the CTA buttons reuse the Home band's
// actions (Donate, Volunteer, Partner) so every page sends people to the same
// places. Any of these can be overridden per page through ProgramPage props.

import { home } from './home'

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
