import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seo } from '../content/seo'
import { siteConfig } from '../content/siteConfig'
import { prefersReducedMotion } from '../utils/motion'

// Route changes scroll to the top instantly. Links with an #anchor (the Contact
// Us dropdown items) scroll smoothly (instantly if reduced motion is on). `key` changes on
// every navigation, so clicking the same anchor again scrolls again.
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  // Each route's pre-rendered HTML (Task 8.1) already has the right <title>
  // on first load; this keeps the browser tab title correct after
  // client-side navigation between those pre-rendered pages too.
  useEffect(() => {
    document.title = seo[pathname]?.title ?? siteConfig.name
  }, [pathname])

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return undefined
    }
    // The target may render a frame after the route change, so retry briefly.
    let frame
    let attempts = 0
    const scrollToAnchor = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target)
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? 'instant' : 'smooth',
        })
      else if (attempts++ < 10) frame = requestAnimationFrame(scrollToAnchor)
    }
    scrollToAnchor()
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}
