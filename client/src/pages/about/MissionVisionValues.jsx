import { Card, PageHero, RichText, Section } from '../../components/ui'
import { missionVisionValues } from '../../content/about'

// Mission, Vision & Values (/about/mission-vision-values): the Vision and the
// Mission as two separate statement blocks, then the five values. All copy
// comes from content/about.js.
export default function MissionVisionValues() {
  const { title, vision, mission, valuesTitle, values } = missionVisionValues

  return (
    <>
      <PageHero title={title} />

      <Section title={vision.title}>
        <p className="max-w-4xl border-l-4 border-brand-600 pl-6 font-heading text-h1 font-semibold text-brand-800 md:pl-8 md:text-display">
          {vision.text}
        </p>
      </Section>

      <Section tone="muted" title={mission.title}>
        <Card variant="highlight" padding="none" className="p-6 md:p-10">
          <p className="max-w-4xl font-heading text-h2 font-medium md:text-h1">
            {mission.text}
          </p>
        </Card>
      </Section>

      <Section title={valuesTitle}>
        <ol className="flex flex-wrap justify-center gap-6">
          {values.map(({ title: valueTitle, text }, index) => (
            <li
              key={valueTitle}
              className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <Card variant="accent" hoverable className="h-full">
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full bg-brand-700 font-semibold text-white"
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 text-h3 font-semibold">{valueTitle}</h3>
                <RichText text={text} className="mt-2 text-ink-muted" />
              </Card>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
