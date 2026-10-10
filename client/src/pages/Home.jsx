import {
  Badge,
  Button,
  Card,
  CTABand,
  PageHero,
  ProgrammeGrid,
  PullQuote,
  RichText,
  Section,
  AutoCarousel,
} from '../components/ui'
import { home } from '../content/home'
import { donateLink } from '../content/navConfig'
import { siteConfig } from '../content/siteConfig'

// Home page. Task 3.1: hero, intro, motto and mission. Task 3.2: focus areas,
// impact, values and the Get Involved band.
// All copy comes from content/home.js (built from about.js, work.js,
// siteConfig.js and navConfig.js).
export default function Home() {
  const { hero, intro, mission, impact } = home

  return (
    <>
      {/* Above the fold, so no scroll-reveal. Text only until the client
          supplies an approved hero image. */}
      <PageHero
        title={hero.headline}
        summary={hero.tagline}
        rightContent={
          <AutoCarousel images={['5.png', '6.JPG', '7.jpg', '8.JPG']} interval={3000} />
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8 min-w-0">
            <RichText text={intro.text} className="text-lead text-ink-muted" />
            <AutoCarousel images={['1.jpg', '2.jpg', '3.JPG', '4.JPG']} interval={3000} />
          </div>
          <div className="space-y-8">
            <PullQuote text={siteConfig.motto} />
            <Card variant="highlight" padding="lg">
              <h2 className="text-h3 font-semibold">{mission.title}</h2>
              <p className="mt-3 text-lead">{mission.text}</p>
            </Card>
          </div>
        </div>
      </Section>




      <Section tone="muted" title={home.valuesTitle}>
        <ol className="flex flex-wrap justify-center gap-4">
          {home.values.map(({ title, text }, index) => (
            <li
              key={title}
              className="w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-4rem)/5)]"
            >
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full bg-brand-700 font-semibold text-white"
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 text-h3 font-semibold">{title}</h3>
                <p className="mt-2 text-ink-muted">{text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <CTABand
        title={home.involveBand.title}
        actions={home.involveBand.actions}
      />
    </>
  )
}
