import { Link } from 'react-router-dom'
import { cx } from './cx'

const base =
  'inline-flex items-center justify-center gap-2 text-center rounded-button border-2 font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary:
    'border-brand-700 bg-brand-700 text-white hover:border-brand-800 hover:bg-brand-800',
  outline: 'border-brand-700 bg-transparent text-brand-700 hover:bg-brand-50',
  donate:
    'border-donate bg-donate text-ink hover:border-donate-hover hover:bg-donate-hover',
}

// Same variants, for buttons that sit on a dark (brand) background.
const onDarkVariants = {
  primary:
    'border-white bg-white text-brand-800 hover:border-brand-100 hover:bg-brand-100',
  outline: 'border-white bg-transparent text-white hover:bg-white/10',
  donate: variants.donate,
}

const sizes = {
  sm: 'px-4 py-2 text-small',
  md: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-lead',
}

// Renders a router <Link> when `to` is given, an <a> when `href` is given,
// otherwise a <button>.
export default function Button({
  variant = 'primary',
  size = 'md',
  onDark = false,
  to,
  href,
  className,
  children,
  ...rest
}) {
  const classes = cx(
    base,
    (onDark ? onDarkVariants : variants)[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
