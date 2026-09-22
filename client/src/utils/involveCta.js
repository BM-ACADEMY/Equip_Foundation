// Turns a Get Involved page's { cta: { label, type } } (content/involve.js)
// into a single-button ProgramPage CTA band that opens the Contact page with
// the right enquiry type pre-selected via ?type=<value>. `type` values already
// match the `value`s in engagementOptions (content/contact.js), so the Contact
// form (a later task) can read the query parameter and select the matching
// option directly — no extra lookup table needed here.
export function getInvolveCta({ cta }) {
  return {
    actions: [
      {
        label: cta.label,
        to: `/contact?type=${encodeURIComponent(cta.type)}`,
        variant: 'primary',
      },
    ],
  }
}
