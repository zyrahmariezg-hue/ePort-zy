import { useEffect, useLayoutEffect } from 'react'
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
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previous
    }
  }, [])

  useLayoutEffect(() => {
    // The global smooth-scroll rule is kept for same-page anchors. Override it
    // only while resetting a newly mounted route, before the browser paints it.
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0
    root.style.scrollBehavior = previousScrollBehavior
  }, [location.key])

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
