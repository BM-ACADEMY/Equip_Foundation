import {
  Badge,
  Card,
  CTABand,
  PageHero,
  ProgrammeCard,
  RichText,
  Section,
} from '../../components/ui'
import { programCta, programLabels } from '../../content/program'

const hasItems = (list) => Array.isArray(list) && list.length > 0

// A titled block of text in a card: title on the left, paragraphs on the right
// (stacked on small screens). Without a title it is just the paragraphs.
function TextBlock({ title, paragraphs, variant, children }) {
  return (
    <Card
      variant={variant}
      padding="none"
      className={
        title
          ? 'grid gap-4 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10'
          : 'p-6 md:p-8'
      }
    >
      {title && <h2 className="text-h2 font-semibold">{title}</h2>}
      <div className="space-y-4">
        <RichText text={paragraphs} />
        {children}
      </div>
    </Card>
  )
}

// Reusable page template for a programme (Our Work) or any page with the same
// kind of content. Every part is optional and is only rendered when the data
// has something for it, so pages with different amounts of content all work.
//
//   page     { title, summary?, intro?[], approach?[], chips?[], cards?[{title,text}],
//              sections?[{title?, body[], highlight?, timeline?[{year,title}]}] }
//   cta      { title, actions:[{label,to,variant}] } for the CTA band, or null
//   related  [{ title, to }] link cards at the bottom (see utils/relatedPages)
//   labels   { intro, approach, focus, related } headings; leave one out to
//            show that block without a heading
//
// All text comes from the data. **bold** phrases in the copy are kept.
export default function ProgramPage({
  page,
  cta = programCta,
  related = [],
  labels = programLabels,
}) {
  const { title, summary, intro, approach, chips, cards, sections } = page

  return (
    <>
      <PageHero title={title} summary={summary} />

      {hasItems(intro) && (
        <Section>
          <TextBlock title={labels.intro} paragraphs={intro} />
        </Section>
      )}

      {hasItems(approach) && (
        <Section tone="muted">
          <TextBlock
            title={labels.approach}
            paragraphs={approach}
            variant="highlight"
          />
        </Section>
      )}

      {(hasItems(chips) || hasItems(cards)) && (
        <Section title={labels.focus}>
          <div className="space-y-8">
            {hasItems(chips) && (
              <ul className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <Badge as="li" key={chip}>
                    {chip}
                  </Badge>
                ))}
              </ul>
            )}
            {hasItems(cards) && (
              <ul className="flex flex-wrap justify-center gap-4">
                {cards.map((card) => (
                  <li
                    key={card.title}
                    className="w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
                  >
                    <Card className="h-full">
                      <h3 className="text-h3 font-semibold">{card.title}</h3>
                      <RichText
                        text={card.text}
                        className="mt-2 text-ink-muted"
                      />
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      )}

      {hasItems(sections) && (
        <Section>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <TextBlock
                key={section.title ?? index}
                title={section.title}
                paragraphs={section.body}
                variant={section.highlight ? 'highlight' : 'default'}
              >
                {hasItems(section.timeline) && (
                  <ul className="flex flex-wrap gap-2 pt-2">
                    {section.timeline.map((entry) => (
                      <Badge
                        as="li"
                        key={`${entry.year} ${entry.name ?? entry.title}`}
                        variant="neutral"
                        className="gap-1.5"
                      >
                        <span className="font-semibold">{entry.year}</span>
                        {entry.name ?? entry.title}
                      </Badge>
                    ))}
                  </ul>
                )}
              </TextBlock>
            ))}
          </div>
        </Section>
      )}

      {cta && <CTABand title={cta.title} actions={cta.actions} />}

      {hasItems(related) && (
        <Section tone="muted" title={labels.related}>
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {related.map(({ title: relatedTitle, to }) => (
              <li key={to}>
                <ProgrammeCard title={relatedTitle} to={to} />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
