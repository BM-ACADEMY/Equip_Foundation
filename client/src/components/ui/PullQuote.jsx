import { cx } from './cx'
import { renderInline } from './renderInline'

const tones = {
  default: 'border-brand-600 bg-brand-50 text-ink',
  brand: 'border-accent-400 bg-brand-800 text-white',
}

// Highlighted statement. `text` supports **bold**; `cite` is an optional
// attribution line.
export default function PullQuote({ text, cite, tone = 'default', className }) {
  return (
    <figure
      className={cx(
        'relative rounded-card border-l-4 px-6 py-8 md:px-10 md:py-10',
        tones[tone],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute top-2 left-4 font-heading text-6xl leading-none opacity-30 select-none md:left-6"
      >
        “
      </span>
      <blockquote className="relative font-heading text-h3 font-medium md:text-h2">
        {renderInline(text)}
      </blockquote>
      {cite && (
        <figcaption className="mt-4 text-small font-semibold opacity-80">
          {cite}
        </figcaption>
      )}
    </figure>
  )
}
