import Layout from './components/Layout'
import { navConfig } from './content/navConfig'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PlaceholderPage from './pages/PlaceholderPage'

// Route table. Every path comes from navConfig (single source), so the menu
// and the routes cannot drift apart. Contact Us sub-items are anchors on the
// single /contact page.
// Replace a PlaceholderPage with the real page component as each task lands.

const titles = new Map()
for (const item of navConfig) {
  for (const { label, path } of [item, ...(item.children ?? [])]) {
    const page = path?.split('#')[0]
    if (page && !titles.has(page)) titles.set(page, label)
  }
}

const pageRoutes = [...titles]
  .filter(([path]) => path !== '/')
  .map(([path, title]) => ({
    path,
    element: <PlaceholderPage title={title} />,
  }))

export const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      ...pageRoutes,
      { path: '*', element: <NotFound /> },
    ],
  },
]
