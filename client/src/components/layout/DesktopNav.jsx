import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { isItemActive, navConfig } from '../../content/navConfig'
import { nav } from '../../content/ui'
import { cx } from '../ui/cx'

function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={cx('size-4 transition-transform', open && 'rotate-180')}
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

function NavItem({ item, open, onOpen, onClose }) {
  const { pathname, hash } = useLocation()
  const toggleRef = useRef(null)
  const active = isItemActive(item, pathname)
  const hasChildren = Boolean(item.children?.length)
  const panelId = `desktop-nav-${item.label.replace(/\W+/g, '-')}`

  const rowClass = cx(
    'flex h-12 items-stretch transition-colors',
    active ? 'bg-brand-800 text-white' : 'hover:bg-accent-300',
  )
  const cellClass = 'flex items-center px-4 font-medium'

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      onClose()
      toggleRef.current?.focus()
    }
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) onClose()
  }

  return (
    <li
      className="group relative"
      onMouseLeave={onClose}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <div className={rowClass}>
        {item.path ? (
          <Link
            to={item.path}
            className={cellClass}
            aria-current={pathname === item.path ? 'page' : undefined}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ) : (
          <button
            ref={toggleRef}
            type="button"
            className={cx(cellClass, 'gap-1')}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => (open ? onClose() : onOpen())}
          >
            {item.label}
            <Chevron open={open} />
          </button>
        )}
        {item.path && hasChildren && (
          <button
            ref={toggleRef}
            type="button"
            className="flex items-center pr-3 pl-0.5"
            aria-label={`${item.label} ${nav.submenu}`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => (open ? onClose() : onOpen())}
          >
            <Chevron open={open} />
          </button>
        )}
      </div>

      {hasChildren && (
        <ul
          id={panelId}
          className={cx(
            'absolute top-full left-0 z-50 min-w-64 rounded-b-card border border-t-0 border-line bg-surface py-2 text-ink shadow-card-hover group-hover:block',
            open ? 'block' : 'hidden',
          )}
        >
          {item.children.map((child) => {
            const current = child.path.includes('#')
              ? pathname + hash === child.path
              : pathname === child.path
            return (
              <li key={child.path}>
                <Link
                  to={child.path}
                  aria-current={current ? 'page' : undefined}
                  onClick={onClose}
                  className={cx(
                    'block px-4 py-2.5 hover:bg-accent-100',
                    current && 'bg-accent-50 font-semibold text-brand-800',
                  )}
                >
                  {child.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

// Desktop (lg and up) menu bar with keyboard-accessible dropdowns.
export default function DesktopNav() {
  const [openLabel, setOpenLabel] = useState(null)

  return (
    <nav aria-label={nav.primaryLabel} className="hidden lg:block">
      <ul className="flex items-stretch">
        {navConfig.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            open={openLabel === item.label}
            onOpen={() => setOpenLabel(item.label)}
            onClose={() => setOpenLabel(null)}
          />
        ))}
      </ul>
    </nav>
  )
}
