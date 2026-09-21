import { Link } from 'react-router-dom'
import { missionVisionValues } from '../../content/about'
import { contact } from '../../content/contact'
import { navConfig } from '../../content/navConfig'
import { isPlaceholder, siteConfig } from '../../content/siteConfig'
import { footer } from '../../content/ui'
import { Container } from '../ui'

// Simple line icons (Feather, MIT licence), keyed by siteConfig.socials[].id.
const socialIcons = {
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <path d="m9.75 15.02 5.75-3.27-5.75-3.27z" />
    </>
  ),
}

const linkClass =
  'rounded-sm underline-offset-4 hover:text-white hover:underline focus-visible:outline-white'
const headingClass = 'mb-4 font-heading text-lead font-semibold text-white'

// Link columns come from navConfig (same source as the header). Contact Us is
// shown as the address / details block instead of a link list.
const linkGroups = navConfig.filter(
  (item) => item.children?.length && item.label !== contact.title,
)

export default function Footer() {
  const { address, socials, registration, name } = siteConfig
  const { email, phone } = siteConfig.contact
  const showEmail = !isPlaceholder(email)
  const showPhone = !isPlaceholder(phone)
  const activeSocials = socials.filter((social) => !isPlaceholder(social.url))

  // "Registered Trust, 2011 · 80G: … · 12A: …" (numbers only once confirmed).
  const registrationLine = [
    `${footer.registered} ${registration.type}, ${registration.year}`,
    ...footer.registrationIds
      .filter(([, key]) => !isPlaceholder(registration[key]))
      .map(([label, key]) => `${label}: ${registration[key]}`),
  ].join(' · ')

  return (
    <footer className="border-t-4 border-accent-500 bg-brand-900 text-brand-100">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr_1.4fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-h3 font-semibold text-white">
              {name}
            </p>
            <p className="mt-3">{missionVisionValues.mission.text}</p>
            <p className="mt-3 font-medium text-accent-200">
              {siteConfig.motto}
            </p>
            {activeSocials.length > 0 && (
              <ul
                aria-label={footer.socialLabel}
                className="mt-5 flex flex-wrap gap-3"
              >
                {activeSocials.map(({ id, label, url }) => (
                  <li key={id}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-full border border-brand-300/50 text-white transition-colors hover:bg-white hover:text-brand-900 focus-visible:outline-white"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {socialIcons[id]}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {linkGroups.map((group) => (
            <nav
              key={group.label}
              aria-label={`${footer.quickLinksLabel}: ${group.label}`}
            >
              <h2 className={headingClass}>
                {group.path ? (
                  <Link to={group.path} className={linkClass}>
                    {group.label}
                  </Link>
                ) : (
                  group.label
                )}
              </h2>
              <ul className="space-y-2">
                {group.children.map((child) => (
                  <li key={child.path}>
                    <Link to={child.path} className={linkClass}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className={headingClass}>{contact.sections.office.title}</h2>
            <address className="not-italic">
              <p className="font-semibold text-white">{address.organisation}</p>
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>
                {contact.labels.pin} {address.pin}
              </p>
            </address>
            {(showEmail || showPhone) && (
              <>
                <h2 className={`${headingClass} mt-6`}>
                  {contact.sections.details.title}
                </h2>
                <ul className="space-y-2">
                  {showEmail && (
                    <li>
                      {contact.labels.email}:{' '}
                      <a href={`mailto:${email}`} className={linkClass}>
                        {email}
                      </a>
                    </li>
                  )}
                  {showPhone && (
                    <li>
                      {contact.labels.phone}:{' '}
                      <a
                        href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                        className={linkClass}
                      >
                        {phone}
                      </a>
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </Container>

      <div className="bg-brand-950">
        <Container className="flex flex-col gap-2 py-5 text-small text-brand-200 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()}{' '}
            <a
              href={footer.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-300 underline-offset-4 hover:underline focus-visible:outline-white"
            >
              {footer.copyrightHolder}
              <span className="sr-only"> {footer.newTab}</span>
            </a>
            . {footer.rights}
          </p>
          <p>{registrationLine}</p>
        </Container>
      </div>
    </footer>
  )
}
