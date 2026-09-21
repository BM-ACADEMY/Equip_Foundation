import { Link } from 'react-router-dom'
import Card from './Card'
import RichText from './RichText'
import { cx } from './cx'

// Icon + title + description. `icon` is any node (an <svg>, an emoji, an
// <img>). Pass `to` to make the whole card a link. Extra content goes in
// children.
export default function IconCard({
  icon,
  title,
  description,
  to,
  variant,
  className,
  children,
}) {
  const linkProps = to ? { as: Link, to, hoverable: true } : {}

  return (
    <Card
      variant={variant}
      className={cx('flex h-full flex-col gap-4', className)}
      {...linkProps}
    >
      {icon && (
        <span
          aria-hidden="true"
          className={cx(
            'flex size-12 shrink-0 items-center justify-center rounded-button bg-brand-100 text-brand-700 transition-colors duration-200 [&>svg]:size-6',
            to &&
              'group-hover:bg-brand-700 group-hover:text-white group-focus-visible:bg-brand-700 group-focus-visible:text-white',
          )}
        >
          {icon}
        </span>
      )}
      <div className="flex flex-col gap-2">
        {title && <h3 className="text-h3 font-semibold">{title}</h3>}
        {description && (
          <RichText text={description} className="text-ink-muted" />
        )}
        {children}
      </div>
    </Card>
  )
}
