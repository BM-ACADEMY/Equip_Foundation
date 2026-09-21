import { home } from '../content/home'
import { siteConfig } from '../content/siteConfig'

// Minimal hero for the scaffold. The full Home page is built in Tasks 3.1 / 3.2.
export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold">{home.hero.headline}</h1>
      <p className="mt-4">
        {siteConfig.name} · {siteConfig.address.place} · {home.hero.sinceLabel}{' '}
        {siteConfig.impact.established}
      </p>
    </section>
  )
}
