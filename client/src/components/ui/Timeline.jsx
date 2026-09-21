import RichText from './RichText'
import { cx } from './cx'

// Milestones list. items: [{ year, title?, text }]. Vertical on every screen
// by default; layout="horizontal" lays the items out in a row from md up.
export default function Timeline({
  items = [],
  layout = 'vertical',
  className,
}) {
  const horizontal = layout === 'horizontal'

  return (
    <ol
      className={cx(
        horizontal
          ? 'grid gap-8 md:auto-cols-fr md:grid-flow-col md:gap-6'
          : 'space-y-8',
        className,
      )}
    >
      {items.map(({ year, title, text }) => (
        <li
          key={year}
          className={cx(
            'relative border-l-2 border-brand-200 pl-6',
            horizontal && 'md:border-t-2 md:border-l-0 md:pt-6 md:pl-0',
          )}
        >
          <span
            aria-hidden="true"
            className={cx(
              'absolute top-1.5 -left-[9px] size-4 rounded-full border-4 border-surface bg-brand-600 ring-2 ring-brand-200',
              horizontal && 'md:-top-[9px] md:left-0',
            )}
          />
          <p className="font-heading text-h2 font-semibold text-brand-700">
            {year}
          </p>
          {title && <h3 className="mt-1 text-h3 font-semibold">{title}</h3>}
          {text && <RichText text={text} className="mt-2 text-ink-muted" />}
        </li>
      ))}
    </ol>
  )
}
