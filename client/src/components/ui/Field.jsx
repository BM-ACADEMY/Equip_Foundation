// Labeled wrapper for one form field: label (+ "required" marker), the
// control itself (children), and an associated error message. `id` must
// match the control's own id so the label and aria-describedby line up.
export default function Field({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-small font-semibold text-ink">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="text-brand-700">
              {' '}
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && !error && (
        <p className="mt-1.5 text-small text-ink-muted">{hint}</p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-small text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  )
}
