import { useId, useState } from 'react'
import RichText from './RichText'
import { cx } from './cx'

// Expand / collapse list. items: [{ id?, title, content }] where content is a
// string, an array of strings (one paragraph each, **bold** supported) or any
// React node. `defaultOpen` is an array of item keys (id, or index when an
// item has no id) open on first render.
export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className,
}) {
  const baseId = useId()
  const [open, setOpen] = useState(() => new Set(defaultOpen))

  const toggle = (key) =>
    setOpen((current) => {
      const next = new Set(allowMultiple ? current : [])
      if (!current.has(key)) next.add(key)
      else if (allowMultiple) next.delete(key)
      return next
    })

  return (
    <div
      className={cx(
        'divide-y divide-line rounded-card border border-line bg-surface shadow-card',
        className,
      )}
    >
      {items.map((item, index) => {
        const key = item.id ?? index
        const isOpen = open.has(key)
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={key}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(key)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-h3 font-semibold hover:bg-surface-muted"
              >
                <span>{item.title}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className={cx(
                    'size-5 shrink-0 text-brand-700 transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 8 5 5 5-5" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cx(
                'grid transition-[grid-template-rows] duration-200',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <div className="space-y-3 px-5 pb-5 text-ink-muted">
                  {typeof item.content === 'string' ||
                  Array.isArray(item.content) ? (
                    <RichText text={item.content} />
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
