import { Outlet, useLocation, Link } from 'react-router-dom'
import { Sidebar } from '@/components/navigation/Sidebar'
import { MobileTopBar } from '@/components/navigation/MobileTopBar'
import { pages } from '@/data/navigation'

export function Layout() {
  const location = useLocation()
  const currentIndex = pages.findIndex((p) => p.path === location.pathname)
  const currentPage = currentIndex >= 0 ? pages[currentIndex] : null
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage =
    currentIndex >= 0 && currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  return (
    <div className="epf-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Sidebar />
      <MobileTopBar />

      <div className="epf-main">
        <main id="main-content" className="epf-content">
          <Outlet />

          {(prevPage || nextPage) && (
            <nav className="epf-pageturn" aria-label="Page navigation">
              {prevPage ? (
                <Link to={prevPage.path} className="epf-pageturn-card">
                  <span className="epf-pageturn-dir">Previous</span>
                  <span className="epf-pageturn-label">{prevPage.label}</span>
                </Link>
              ) : (
                <span />
              )}
              {nextPage ? (
                <Link to={nextPage.path} className="epf-pageturn-card epf-pageturn-card--next">
                  <span className="epf-pageturn-dir">Next</span>
                  <span className="epf-pageturn-label">{nextPage.label}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </main>

        <footer className="epf-foot">{currentPage?.label ?? 'ePortfolio'}</footer>
      </div>
    </div>
  )
}
