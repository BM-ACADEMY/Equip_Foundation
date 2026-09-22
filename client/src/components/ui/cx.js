// Joins class names, skipping falsy values.
export const cx = (...parts) => parts.filter(Boolean).join(' ')

// Shared classes for text/email/tel inputs, textareas and selects, so every
// form control looks and focuses consistently. Global :focus-visible
// (theme.css) already supplies the outline; this only handles the border.
export const fieldClass = (hasError) =>
  cx(
    'block w-full rounded-button border bg-surface px-4 py-2.5 text-body text-ink placeholder:text-ink-muted transition-colors',
    hasError ? 'border-red-400' : 'border-line',
  )
