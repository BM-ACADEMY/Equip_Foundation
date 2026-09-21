// Single source for the menu: header, mobile menu, footer and sitemap all read
// this. Page slugs and titles come from the content files.
// Top-level items with `path: null` are dropdown-only (they have no page).
// Contact Us children are anchors on the one /contact page.

import { aboutPages } from './about'
import { contact } from './contact'
import { involvePages, involveOverview } from './involve'
import { workOverview, workPages } from './work'

const toChild = (base) => (page) => ({
  label: page.title,
  path: `${base}/${page.slug}`,
})

export const navConfig = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: null,
    children: Object.values(aboutPages).map(toChild('/about')),
  },
  {
    label: workOverview.title,
    path: '/work',
    children: workPages.map(toChild('/work')),
  },
  {
    label: involveOverview.title,
    path: '/get-involved',
    children: involvePages.map(toChild('/get-involved')),
  },
  {
    label: contact.title,
    path: '/contact',
    children: Object.values(contact.sections).map((section) => ({
      label: section.title,
      path: `/contact#${section.id}`,
    })),
  },
]

// Every real page path (anchors removed, duplicates dropped). Used by the
// route table and, later, the sitemap and pre-rendering.
export const allPaths = [
  ...new Set(
    navConfig.flatMap((item) => [
      item.path,
      ...(item.children ?? []).map((child) => child.path),
    ]),
  ),
]
  .filter(Boolean)
  .map((path) => path.split('#')[0])
  .filter((path, index, list) => list.indexOf(path) === index)

// Where the logo links to (the Home menu item).
export const homePath = navConfig[0].path

// The always-visible Donate button in the header.
const donatePage = involvePages.find((page) => page.slug === 'donate')
export const donateLink = {
  label: donatePage.title,
  path: `/get-involved/${donatePage.slug}`,
}

// True when the menu item (or one of its children) is the current page.
export const isItemActive = (item, pathname) => {
  const matches = (path) => {
    if (!path) return false
    const page = path.split('#')[0]
    return page === '/' ? pathname === '/' : pathname.startsWith(page)
  }
  return (
    matches(item.path) || (item.children ?? []).some((c) => matches(c.path))
  )
}
