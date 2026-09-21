import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

// Shared page shell. Header, mobile menu and footer are added in Tasks 2.1 / 2.2.
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </>
  )
}
