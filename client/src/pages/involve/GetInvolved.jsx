import { Link } from 'react-router-dom'
import { Card, PageHero, RichText, Section } from '../../components/ui'
import { involveOverview, involvePages } from '../../content/involve'
import { waysToGetInvolved } from '../../content/program'

// First sentence of a paragraph, verbatim (bold markers kept) — the same
// concise-excerpt approach content/home.js uses for its own summaries.
const firstSentence = (text) => text.split(/(?<=\.)\s/)[0]

// Get Involved overview (/get-involved): the client's intro paragraph, 8
// action cards, and the client's closing paragraph. Card titles/links reuse
// content/program.js's waysToGetInvolved (same data as the Our Work
// cross-link band); each card's one-line description is the first sentence
// of that page's own body text in content/involve.js — no invented copy.
export default function GetInvolved() {
  const { title, intro, closing } = involveOverview
  const cards = waysToGetInvolved.items.map((item, index) => ({
    ...item,
    description: firstSentence(involvePages[index].body[0]),
  }))

  return (
    <>
      <PageHero title={title} />

      <Section>
        <Card padding="none" className="p-6 md:p-8">
          <RichText text={intro} />
        </Card>
      </Section>

      <Section tone="muted">
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {cards.map(({ title: cardTitle, to, description }) => (
            <li key={to}>
              <Card
                as={Link}
                to={to}
                hoverable
                padding="lg"
                className="flex h-full flex-col gap-3"
              >
                <h2 className="text-h3 font-semibold">{cardTitle}</h2>
                <RichText text={description} className="text-ink-muted" />
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Card padding="none" className="p-6 md:p-8">
          <RichText text={closing} />
        </Card>
      </Section>
    </>
  )
}
