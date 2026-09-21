import Container from './Container'
import Reveal from './Reveal'
import RichText from './RichText'
import { cx } from './cx'

const tones = {
  default: 'bg-surface text-ink',
  muted: 'bg-surface-muted text-ink',
  brand: 'bg-brand-800 text-white',
}

// A page section: vertical rhythm + optional heading block (eyebrow, title,
// intro). Use `id` for anchored sections (e.g. /contact#office). Content fades
// in on scroll; pass reveal={false} for sections that are always on screen.
export default function Section({
  id,
  as: Tag = 'section',
  tone = 'default',
  size = 'default',
  eyebrow,
  title,
  intro,
  align = 'left',
  reveal = true,
  className,
  children,
}) {
  const hasHeading = eyebrow || title || intro
  const onDark = tone === 'brand'
  const Wrapper = reveal ? Reveal : 'div'

  return (
    <Tag
      id={id}
      className={cx(
        'scroll-mt-24 py-section lg:py-section-lg',
        tones[tone],
        className,
      )}
    >
      <Container size={size}>
        <Wrapper>
          {hasHeading && (
            <header
              className={cx(
                'mb-10 max-w-narrow',
                align === 'center' && 'mx-auto text-center',
              )}
            >
              {eyebrow && (
                <p
                  className={cx(
                    'mb-2 text-small font-semibold tracking-wide uppercase',
                    onDark ? 'text-brand-200' : 'text-brand-700',
                  )}
                >
                  {eyebrow}
                </p>
              )}
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
              {intro && (
                <RichText
                  text={intro}
                  className={cx(
                    'mt-4 text-lead',
                    onDark ? 'text-brand-100' : 'text-ink-muted',
                  )}
                />
              )}
            </header>
          )}
          {children}
        </Wrapper>
      </Container>
    </Tag>
  )
}
