import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '@/components/navigation/Sidebar'
import { MobileTopBar } from '@/components/navigation/MobileTopBar'
import { pages } from '@/data/navigation'
import { PageTurn } from '@/components/navigation/PageTurn'

export function Layout() {
  const location = useLocation()
  const currentIndex = pages.findIndex((p) => p.path === location.pathname)
  const currentPage = currentIndex >= 0 ? pages[currentIndex] : null
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage =
    currentIndex >= 0 && currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

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

          <PageTurn previous={prevPage} next={nextPage} />
        </main>

        <footer className="epf-foot">
          <span>{currentPage?.label ?? 'ePortfolio'}</span>
          {currentIndex >= 0 && <span>Chapter {currentIndex + 1} of {pages.length}</span>}
        </footer>
      </div>
    </div>
  )
}
