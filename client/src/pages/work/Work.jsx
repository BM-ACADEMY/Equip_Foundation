import { PageHero, ProgrammeGrid, Section } from '../../components/ui'
import { navConfig } from '../../content/navConfig'
import { workOverview, workPages } from '../../content/work'

// Our Work overview: a grid of the 8 programme pages. Reuses the same
// ProgrammeGrid / ProgrammeCard as the Home focus-area section — title-only
// cards, no invented summaries. Data comes from content/work.js; the base
// path comes from navConfig.js (the same single source routes.jsx uses).
const workPath = navConfig.find(
  (item) => item.label === workOverview.title,
)?.path

export default function Work() {
  const items = workPages.map(({ title, slug }) => ({
    title,
    to: `${workPath}/${slug}`,
  }))

  return (
    <>
      <PageHero title={workOverview.title} />

      <Section>
        <ProgrammeGrid items={items} />
      </Section>
    </>
  )
}
