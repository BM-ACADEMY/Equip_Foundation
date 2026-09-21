import {
  Card,
  PageHero,
  RichText,
  Section,
  Timeline,
} from '../../components/ui'
import { history } from '../../content/about'

// Our History (/about/history): milestone timeline, then the client's History
// text, one card per paragraph. All copy comes from content/about.js.
export default function History() {
  return (
    <>
      <PageHero title={history.title} />

      <Section tone="muted">
        <h2 className="sr-only">{history.timelineLabel}</h2>
        <Timeline items={history.timeline} layout="horizontal" />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {history.paragraphs.map((paragraph) => (
            <Card key={paragraph} padding="none" className="p-6 md:p-8">
              <RichText text={paragraph} />
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
