import Layout from './components/Layout'
import { involveOverview, involvePages } from './content/involve'
import { navConfig } from './content/navConfig'
import { waysToGetInvolved } from './content/program'
import { workOverview, workPages } from './content/work'
import AnnualReports from './pages/about/AnnualReports'
import Approach from './pages/about/Approach'
import History from './pages/about/History'
import MissionVisionValues from './pages/about/MissionVisionValues'
import Team from './pages/about/Team'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Donate from './pages/involve/Donate'
import GetInvolved from './pages/involve/GetInvolved'
import NotFound from './pages/NotFound'
import PlaceholderPage from './pages/PlaceholderPage'
import ProgramPage from './pages/work/ProgramPage'
import Work from './pages/work/Work'
import { getInvolveCta } from './utils/involveCta'
import { getRelatedPages } from './utils/relatedPages'

// Route table. Every path comes from navConfig (single source), so the menu
// and the routes cannot drift apart:
//   Home 1 + About 5 + Our Work 8 + Get Involved 8 + Contact 4 = 26 menu pages.
// The 4 Contact Us items are anchors (#office, #details, #social, #enquiry) on
// the single /contact route, so they add sections, not routes. /work and
// /get-involved are the section overview pages. Unknown URLs show the 404 page.

const titles = new Map()
for (const item of navConfig) {
  for (const { label, path } of [item, ...(item.children ?? [])]) {
    const page = path?.split('#')[0]
    if (page && !titles.has(page)) titles.set(page, label)
  }
}

// The Our Work programme pages all use the one ProgramPage template. Each page's
// data comes from content/work.js, and its related pages are picked from the
// same list. Paths follow the menu (/work/<slug>). Only Our Work pages (not
// the Get Involved pages below, which also use ProgramPage) get the "Ways to
// get involved" cross-link band at the bottom.
const workPath = navConfig.find(
  (item) => item.label === workOverview.title,
)?.path
const programmePages = Object.fromEntries(
  workPages.map((page) => [
    `${workPath}/${page.slug}`,
    <ProgramPage
      key={page.slug}
      page={page}
      related={getRelatedPages(page, workPages, workPath)}
      waysToGetInvolved={waysToGetInvolved}
    />,
  ]),
)

// The 7 Get Involved pages also use ProgramPage: each page's two body
// paragraphs become the (heading-less) intro block, and its own single-button
// CTA opens Contact with the right enquiry type pre-selected (see
// utils/involveCta.js). The "donate" entry has its own bespoke page (Bank
// Details, below) instead, so it is excluded here.
const involvePath = navConfig.find(
  (item) => item.label === involveOverview.title,
)?.path
const involveRoutePages = Object.fromEntries(
  involvePages
    .filter((page) => page.slug !== 'donate')
    .map((page) => [
      `${involvePath}/${page.slug}`,
      <ProgramPage
        key={page.slug}
        page={{ title: page.title, intro: page.body }}
        cta={getInvolveCta(page)}
        labels={{}}
      />,
    ]),
)

// Pages that are built. Every other route shows a PlaceholderPage until its
// task is done: add the page here when it lands.
const builtPages = {
  '/about/history': <History />,
  '/about/mission-vision-values': <MissionVisionValues />,
  '/about/approach': <Approach />,
  '/about/team': <Team />,
  '/about/annual-reports': <AnnualReports />,
  [workPath]: <Work />,
  ...programmePages,
  [involvePath]: <GetInvolved />,
  [`${involvePath}/donate`]: <Donate />,
  ...involveRoutePages,
  '/contact': <Contact />,
}

const pageRoutes = [...titles]
  .filter(([path]) => path !== '/')
  .map(([path, title]) => ({
    path,
    element: builtPages[path] ?? <PlaceholderPage title={title} />,
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
