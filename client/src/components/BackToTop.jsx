import { useEffect, useState } from 'react'
import { backToTop } from '../content/ui'
import { prefersReducedMotion } from '../utils/motion'

// Appears after the visitor has scrolled about one screen down.
const SHOW_AFTER = 600

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() =>
        setVisible(window.scrollY > SHOW_AFTER),
      )
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
    }
  }, [])

  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'instant' : 'smooth',
    })
    // The button hides itself at the top, so hand focus back to the page start.
    event.currentTarget.blur()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={backToTop.label}
      title={backToTop.label}
      data-open={visible}
      className="fade-toggle fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full border-2 border-white bg-brand-700 text-white shadow-card-hover [--fade-offset:0.5rem] hover:bg-brand-600 focus-visible:outline-white sm:right-6 sm:bottom-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
