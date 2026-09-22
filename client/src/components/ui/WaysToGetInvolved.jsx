import ProgrammeGrid from './ProgrammeGrid'
import Section from './Section'

// Cross-link band: links to all 8 Get Involved pages. Added once at the
// bottom of every Our Work page (via ProgramPage) instead of duplicating the
// same 8 links across 8 files. `items` is [{ title, to }] — see
// content/program.js (waysToGetInvolved), built from content/involve.js.
// Default tone is 'default' (white): it follows the muted Related-pages
// section, so this keeps the existing light/dark rhythm at the page bottom.
export default function WaysToGetInvolved({ title, items, tone = 'default' }) {
  return (
    <Section tone={tone} title={title}>
      <ProgrammeGrid items={items} />
    </Section>
  )
}
