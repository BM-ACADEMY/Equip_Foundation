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
