// Home page copy.
// The client document has NO Home copy. Everything here is taken from the
// About Us text and the development plan, and is marked for client approval.

export const home = {
  needsApproval: true,
  // Hero headline is the Vision statement. The tagline pulls its place and
  // year from siteConfig.js.
  hero: {
    headline: 'People and communities equipped to shape their own future.',
    sinceLabel: 'Since',
    primaryCta: 'Donate',
    secondaryCta: 'See Our Work',
  },
  intro: {
    // Short intro taken from Our History (see about.js) plus the motto.
    text: 'Equip Foundation builds on a journey of more than two decades with a continued commitment to **human dignity, social justice, empowerment and sustainable development.**',
  },
  focusAreasTitle: 'Our Work',
  valuesTitle: 'Our Values',
  involveBand: {
    title: 'Get Involved',
    actions: [
      { label: 'Donate', path: '/get-involved/donate' },
      { label: 'Volunteer', path: '/get-involved/volunteer' },
      { label: 'Partner', path: '/get-involved/partnership' },
    ],
  },
}
