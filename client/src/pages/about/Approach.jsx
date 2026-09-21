import {
  Card,
  PageHero,
  PullQuote,
  RichText,
  Section,
} from '../../components/ui'
import { approach } from '../../content/about'

// One approach block: title on the left, the client's text on the right
// (stacked on small screens).
function ApproachBlock({ title, text }) {
  return (
    <Card
      padding="none"
      className="grid gap-4 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10"
    >
      <h2 className="text-h2 font-semibold">{title}</h2>
      <RichText text={text} />
    </Card>
  )
}

// Our Approach (/about/approach): three blocks (equipping people, ABCD,
// sustainable and inclusive development) with the pull quote as a key
// statement between them. All copy comes from content/about.js.
export default function Approach() {
  const lastBlock = approach.blocks.at(-1)

  return (
    <>
      <PageHero title={approach.title} />

      <Section>
        <div className="space-y-6">
          {approach.blocks.slice(0, -1).map((block) => (
            <ApproachBlock key={block.title} {...block} />
          ))}
        </div>
      </Section>

      <Section tone="muted" size="narrow">
        <PullQuote text={approach.quote} tone="brand" />
      </Section>

      <Section>
        <ApproachBlock {...lastBlock} />
      </Section>
    </>
  )
}
