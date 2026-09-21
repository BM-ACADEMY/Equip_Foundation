import { cx } from './cx'

const sizes = {
  default: 'max-w-page',
  narrow: 'max-w-narrow',
  wide: 'max-w-wide',
}

// Centres content and applies the page gutters (16px on phones).
export default function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cx(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
