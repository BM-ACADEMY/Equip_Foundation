import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { isItemActive, navConfig } from '../../content/navConfig'
import { nav } from '../../content/ui'
import { cx } from '../ui/cx'

// `menu.label` is the open dropdown. `pinned` is true when it was opened by a
// click / key press (it then stays open until closed); false when it was only
// opened by hovering with a mouse (it closes when the pointer leaves).
const CLOSED = { label: null, pinned: false }

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

function NavItem({ item, open, actions }) {
  const { pathname, hash } = useLocation()
  const rowRef = useRef(null)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const focusFirstOnOpen = useRef(false)
  const active = isItemActive(item, pathname)
  const hasChildren = Boolean(item.children?.length)
  const panelId = `desktop-nav-${item.label.replace(/\W+/g, '-')}`
  const { hoverOpen, hoverClose, toggle, pin, close } = actions

  // After ArrowDown opens the panel, move focus to its first link.
  useEffect(() => {
    if (open && focusFirstOnOpen.current) {
      focusFirstOnOpen.current = false
      panelRef.current?.querySelector('a')?.focus()
    }
  }, [open])

  const handleKeyDown = (event) => {
    if (!hasChildren) return
    const links = [...(panelRef.current?.querySelectorAll('a') ?? [])]
    const index = links.indexOf(event.target)
    const inRow = rowRef.current?.contains(event.target)

    if (event.key === 'Escape' && open) {
      event.preventDefault()
      close()
      toggleRef.current?.focus()
    } else if (event.key === 'ArrowDown' && inRow) {
      event.preventDefault()
      pin()
      if (open) links[0]?.focus()
      else focusFirstOnOpen.current = true
    } else if (index >= 0) {
      const moves = {
        ArrowDown: () => links[(index + 1) % links.length],
        ArrowUp: () => (index === 0 ? toggleRef.current : links[index - 1]),
        Home: () => links[0],
        End: () => links[links.length - 1],
      }
      if (moves[event.key]) {
        event.preventDefault()
        moves[event.key]().focus()
      }
    }
  }

  // Close when focus leaves this item (Tab / Shift+Tab out of the menu).
  const handleBlur = (event) => {
    if (open && !event.currentTarget.contains(event.relatedTarget)) close()
  }

  const rowClass = cx(
    'flex h-12 items-stretch transition-colors',
    active ? 'bg-brand-800 text-white' : 'hover:bg-accent-300',
  )
  const cellClass = 'flex items-center px-4 font-medium'
  const mouseOnly = (handler) => (event) => {
    if (event.pointerType === 'mouse') handler()
  }

  return (
    <li
      className="relative"
      onPointerEnter={hasChildren ? mouseOnly(hoverOpen) : undefined}
      onPointerLeave={hasChildren ? mouseOnly(hoverClose) : undefined}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <div ref={rowRef} className={rowClass}>
        {item.path ? (
          <Link
            to={item.path}
            className={cellClass}
            aria-current={pathname === item.path ? 'page' : undefined}
            onClick={close}
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
            onClick={toggle}
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
            onClick={toggle}
          >
            <Chevron open={open} />
          </button>
        )}
      </div>

      {hasChildren && (
        <ul
          ref={panelRef}
          id={panelId}
          data-open={open}
          className="fade-toggle absolute top-full left-0 z-50 min-w-64 rounded-b-card border border-t-0 border-line bg-surface py-2 text-ink shadow-card-hover"
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
                  onClick={close}
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

// Desktop (lg and up) menu bar with accessible dropdowns: hover, click, arrow
// keys, Escape, and closing on outside click or when focus leaves.
export default function DesktopNav() {
  const [menu, setMenu] = useState(CLOSED)
  const navRef = useRef(null)

  useEffect(() => {
    if (!menu.label) return undefined
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setMenu(CLOSED)
    }
    const onKeyDown = (event) => event.key === 'Escape' && setMenu(CLOSED)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menu.label])

  const actionsFor = (label) => ({
    hoverOpen: () =>
      setMenu((m) =>
        m.label === label && m.pinned ? m : { label, pinned: false },
      ),
    hoverClose: () =>
      setMenu((m) => (m.label === label && !m.pinned ? CLOSED : m)),
    // A click on a hover-opened menu keeps it open (pins it); a second click closes.
    toggle: () =>
      setMenu((m) =>
        m.label === label && m.pinned ? CLOSED : { label, pinned: true },
      ),
    pin: () => setMenu({ label, pinned: true }),
    close: () => setMenu(CLOSED),
  })

  return (
    <nav ref={navRef} aria-label={nav.primaryLabel} className="hidden lg:block">
      <ul className="flex items-stretch">
        {navConfig.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            open={menu.label === item.label}
            actions={actionsFor(item.label)}
          />
        ))}
      </ul>
    </nav>
  )
}
