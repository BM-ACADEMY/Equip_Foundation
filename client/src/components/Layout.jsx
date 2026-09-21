import { Outlet } from 'react-router-dom'
import Header from './layout/Header'
import ScrollToTop from './ScrollToTop'

// Shared page shell. The footer is added in Task 2.2.
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
    </>
  )
}
