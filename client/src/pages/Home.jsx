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
      <PageHero title={hero.headline} summary={hero.tagline}>
        <Button to={donateLink.path} variant="donate" size="lg" onDark>
          {donateLink.label}
        </Button>
        <Button to={hero.secondaryCta.path} variant="outline" size="lg" onDark>
          {hero.secondaryCta.label}
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8">
            <RichText text={intro.text} className="text-lead text-ink-muted" />
            <PullQuote text={siteConfig.motto} />
          </div>
          <Card variant="highlight" padding="lg">
            <h2 className="text-h3 font-semibold">{mission.title}</h2>
            <p className="mt-3 text-lead">{mission.text}</p>
          </Card>
        </div>
      </Section>

      <Section tone="muted" title={home.focusAreasTitle}>
        <ProgrammeGrid items={home.focusAreas} />
      </Section>

      <Section title={impact.title}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-6">
            {impact.stats.map(({ label, value }) => (
              <Card key={label}>
                <dt className="text-small font-semibold tracking-wide text-ink-muted uppercase">
                  {label}
                </dt>
                <dd className="mt-2 font-heading text-h1 font-semibold text-brand-700 md:text-display">
                  {value}
                </dd>
              </Card>
            ))}
          </dl>
          <Card padding="lg">
            <h3 className="text-h3 font-semibold">{impact.disastersTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {impact.disasters.map(({ year, name }) => (
                <Badge
                  as="li"
                  key={`${year} ${name}`}
                  variant="neutral"
                  className="gap-1.5"
                >
                  <span className="font-semibold">{year}</span>
                  {name}
                </Badge>
              ))}
            </ul>
            {impact.covid && (
              <div className="mt-6 border-t border-line pt-6">
                <Badge variant="accent">{impact.covid.label}</Badge>
                <RichText
                  text={impact.covid.text}
                  className="mt-3 text-ink-muted"
                />
              </div>
            )}
          </Card>
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
