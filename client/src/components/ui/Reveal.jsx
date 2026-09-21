import { useLayoutEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../../utils/motion'
import { cx } from './cx'

// Fades + slides its content in when it scrolls into view.
//  - Content starts fully visible (no JS / pre-rendered HTML / search engines
//    see everything). Only elements that are below the fold on load are
//    hidden, before first paint, so there is no flash.
//  - Nothing is hidden when the visitor prefers reduced motion.
//  - Styles live in theme.css (.reveal).
export default function Reveal({
  as: Tag = 'div',
  className,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [state, setState] = useState(null) // null | 'hidden' | 'shown'

  useLayoutEffect(() => {
    const element = ref.current
    if (
      !element ||
      prefersReducedMotion() ||
      !('IntersectionObserver' in window)
    )
      return undefined
    // Already on screen, or scrolled past (e.g. an #anchor jump): leave it.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9)
      return undefined

    setState('hidden')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setState('shown')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cx('reveal', className)}
      data-reveal={state ?? undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
