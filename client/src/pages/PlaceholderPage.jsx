import { Container } from '../components/ui'
import { placeholder } from '../content/ui'

// Stand-in for pages whose content task is not built yet. Shows the title and
// a note. `sections` ({ id, title }) render empty anchored blocks, so in-page
// menu links (e.g. /contact#office) can already scroll to their target.
export default function PlaceholderPage({ title, sections = [] }) {
  return (
    <>
      <Container className="py-16">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-ink-muted">{placeholder.note}</p>
      </Container>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-[60vh] scroll-mt-16 border-t border-line"
        >
          <Container className="py-10">
            <h2 className="text-h2 font-semibold">{section.title}</h2>
          </Container>
        </section>
      ))}
    </>
  )
}
