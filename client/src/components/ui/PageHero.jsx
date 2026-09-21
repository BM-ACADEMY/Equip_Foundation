import Container from './Container'
import RichText from './RichText'
import { cx } from './cx'

const tones = {
  brand: 'bg-brand-800 text-white',
  muted: 'bg-surface-muted text-ink',
}

// Top banner of a page: title, optional eyebrow + summary, and a slot for
// action buttons (children). Renders the page's single <h1>.
export default function PageHero({
  title,
  eyebrow,
  summary,
  tone = 'brand',
  align = 'left',
  className,
  children,
}) {
  const onDark = tone === 'brand'

  return (
    <header className={cx('py-14 md:py-20', tones[tone], className)}>
      <Container>
        <div
          className={cx(
            'max-w-narrow',
            align === 'center' && 'mx-auto text-center',
          )}
        >
          {eyebrow && (
            <p
              className={cx(
                'mb-3 text-small font-semibold tracking-wide uppercase',
                onDark ? 'text-brand-200' : 'text-brand-700',
              )}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={cx(
              'text-h1 font-semibold md:text-display',
              onDark && 'text-white',
            )}
          >
            {title}
          </h1>
          {summary && (
            <RichText
              text={summary}
              className={cx(
                'mt-4 text-lead',
                onDark ? 'text-brand-100' : 'text-ink-muted',
              )}
            />
          )}
          {children && (
            <div
              className={cx(
                'mt-8 flex flex-wrap gap-3',
                align === 'center' && 'justify-center',
              )}
            >
              {children}
            </div>
          )}
        </div>
      </Container>
    </header>
  )
}
