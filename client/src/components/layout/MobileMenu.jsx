import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { isItemActive, navConfig } from '../../content/navConfig'
import { nav } from '../../content/ui'
import { cx } from '../ui/cx'

function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={cx('size-5 transition-transform', open && 'rotate-180')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 5 5 5-5" />
    </svg>
  )
}

// Hamburger panel (below lg): each dropdown becomes an accordion section.
export default function MobileMenu({ id, open, onClose }) {
  const { pathname, hash } = useLocation()
  const [openLabel, setOpenLabel] = useState(null)

  return (
    <nav
      id={id}
      aria-label={nav.mobileLabel}
      data-open={open}
      className="fade-toggle absolute inset-x-0 top-full max-h-[calc(100dvh-3rem)] overflow-y-auto border-t border-accent-700 bg-surface shadow-card-hover lg:hidden"
    >
      <ul className="divide-y divide-line">
        {navConfig.map((item) => {
          const hasChildren = Boolean(item.children?.length)
          const expanded = openLabel === item.label
          const active = isItemActive(item, pathname)
          const panelId = `mobile-nav-${item.label.replace(/\W+/g, '-')}`
          const toggle = () => setOpenLabel(expanded ? null : item.label)
          const rowClass = cx(
            'flex items-stretch',
            active && 'bg-brand-50 text-brand-800',
          )

          return (
            <li key={item.label}>
              <div className={rowClass}>
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={onClose}
                    aria-current={pathname === item.path ? 'page' : undefined}
                    className="flex-1 px-4 py-3.5 font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={toggle}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="flex-1 px-4 py-3.5 text-left font-semibold"
                  >
                    {item.label}
                  </button>
                )}
                {hasChildren && (
                  <button
                    type="button"
                    onClick={toggle}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    aria-label={`${item.label} ${nav.submenu}`}
                    className="flex items-center px-4"
                  >
                    <Chevron open={expanded} />
                  </button>
                )}
              </div>
              {hasChildren && (
                <div
                  id={panelId}
                  className={cx(
                    'grid bg-surface-muted transition-[grid-template-rows] duration-200',
                    expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <ul className="overflow-hidden" inert={!expanded}>
                    {item.children.map((child) => {
                      const current = child.path.includes('#')
                        ? pathname + hash === child.path
                        : pathname === child.path
                      return (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            onClick={onClose}
                            aria-current={current ? 'page' : undefined}
                            className={cx(
                              'block py-3 pr-4 pl-8 hover:bg-accent-100',
                              current && 'font-semibold text-brand-800',
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
