import { cx } from './cx'

const variants = {
  default: 'border-line bg-surface',
  muted: 'border-transparent bg-surface-muted',
  highlight: 'border-brand-200 bg-brand-50 border-l-4 border-l-brand-600',
}

const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }

// Flexible base card. `as` lets it render a link (as={Link} to="…") or any
// element. `hoverable` adds the lift effect for clickable cards.
export default function Card({
  as: Tag = 'div',
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cx(
        'block rounded-card border shadow-card',
        variants[variant],
        paddings[padding],
        hoverable &&
          'transition-shadow duration-200 hover:shadow-card-hover motion-safe:transition-transform motion-safe:hover:-translate-y-0.5',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
