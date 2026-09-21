import { Outlet } from 'react-router-dom'
import BackToTop from './BackToTop'
import Footer from './layout/Footer'
import Header from './layout/Header'
import ScrollToTop from './ScrollToTop'

// Shared page shell: header, page content, footer. The wrapper keeps the
// footer at the bottom on short pages and gives the sticky menu bar the full
// page height to stay pinned within.
export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
