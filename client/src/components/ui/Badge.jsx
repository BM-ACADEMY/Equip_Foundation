import { cx } from './cx'

const variants = {
  brand: 'bg-brand-100 text-brand-900',
  accent: 'bg-accent-100 text-accent-900',
  neutral: 'bg-surface-muted text-ink border border-line',
  outline: 'border border-brand-700 text-brand-700',
}

const sizes = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3.5 py-1.5 text-small',
}

// Small label / tag. Also used as the "highlight chip" for key phrases.
export default function Badge({
  variant = 'brand',
  size = 'md',
  as: Tag = 'span',
  className,
  children,
}) {
  return (
    <Tag
      className={cx(
        'inline-flex items-center rounded-chip font-medium',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
