import Button from './Button'
import Container from './Container'
import RichText from './RichText'
import { cx } from './cx'

const tones = {
  brand: 'bg-brand-800 text-white',
  accent: 'bg-accent-50 text-ink',
  muted: 'bg-surface-muted text-ink',
}

// Call-to-action band. `actions` is a list of
// { label, to | href, variant } rendered as Buttons.
export default function CTABand({
  title,
  text,
  actions = [],
  tone = 'brand',
  className,
}) {
  const onDark = tone === 'brand'

  return (
    <section className={cx('py-14 md:py-16', tones[tone], className)}>
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-narrow">
          {title && (
            <h2
              className={cx(
                'text-h2 font-semibold md:text-h1',
                onDark && 'text-white',
              )}
            >
              {title}
            </h2>
          )}
          {text && (
            <RichText
              text={text}
              className={cx(
                'mt-3 text-lead',
                onDark ? 'text-brand-100' : 'text-ink-muted',
              )}
            />
          )}
        </div>
        {actions.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {actions.map(({ label, ...action }) => (
              <Button key={label} onDark={onDark} {...action}>
                {label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
