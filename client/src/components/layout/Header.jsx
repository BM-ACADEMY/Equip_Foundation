import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { donateLink, homePath } from '../../content/navConfig'
import { siteConfig } from '../../content/siteConfig'
import { nav } from '../../content/ui'
import { Button, Container } from '../ui'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'

const MOBILE_MENU_ID = 'mobile-menu'

// Site header, modelled on the client's reference:
//  1. crimson banner with the logo (left) and a framed grayscale image (right)
//  2. olive menu bar, sticky, with the dropdown menus and the Donate button.
// The two parts are siblings (a fragment) so the menu bar can stay stuck while
// the whole page scrolls.
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { logo, headerImage } = siteConfig.assets
  const closeMobile = () => setMobileOpen(false)

  useEffect(() => {
    if (!mobileOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setMobileOpen(false)
      menuButtonRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-button focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold"
      >
        {nav.skipToContent}
      </a>

      {/* Banner. Its gradient matches the logo background, so the logo image
          blends in. The banner height equals the logo height. */}
      <div className="relative z-40 bg-linear-to-b from-banner-top to-banner-bottom">
        <Container className="relative flex h-20 items-center md:h-28">
          <Link to={homePath} className="h-full focus-visible:outline-white">
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={siteConfig.name}
              className="h-full w-auto"
            />
          </Link>
          <img
            src={headerImage}
            alt=""
            aria-hidden="true"
            className="absolute top-2 right-8 hidden h-32 w-28 rounded-[50%] border-2 border-white object-cover shadow-card-hover grayscale lg:block"
          />
        </Container>
      </div>

      {/* Menu bar */}
      <div className="sticky top-0 z-30 border-t border-white bg-accent-500 text-ink">
        <Container className="relative">
          <div className="flex h-12 items-center gap-3 lg:pr-36">
            <button
              ref={menuButtonRef}
              type="button"
              className="-ml-2 flex items-center gap-2 rounded-button px-2 py-2 font-semibold hover:bg-accent-300 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls={MOBILE_MENU_ID}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
              {mobileOpen ? nav.closeMenu : nav.menu}
            </button>

            <DesktopNav />

            <Button
              to={donateLink.path}
              variant="donate"
              size="sm"
              className="ml-auto"
              onClick={closeMobile}
            >
              {donateLink.label}
            </Button>
          </div>
        </Container>
        <MobileMenu
          id={MOBILE_MENU_ID}
          open={mobileOpen}
          onClose={closeMobile}
        />
      </div>
    </>
  )
}
