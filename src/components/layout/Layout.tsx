import { Outlet, useLocation } from 'react-router-dom'
import { TopNav } from '@/components/navigation/TopNav'
import { pages } from '@/data/navigation'

export function Layout() {
  const location = useLocation()
  const currentPage = pages.find((p) => p.path === location.pathname)
  const currentIndex = pages.findIndex((p) => p.path === location.pathname)
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <TopNav />
      <main
        id="main-content"
        style={{
          paddingTop: 'var(--nav-height)',
          minHeight: '100dvh',
        }}
      >
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            padding: 'var(--space-3xl) var(--space-xl) var(--space-3xl)',
          }}
        >
          <Outlet />
        </div>

        {/* Page navigation (prev/next) */}
        {(prevPage || nextPage) && (
          <nav
            aria-label="Page navigation"
            style={{
              maxWidth: '72rem',
              margin: '0 auto',
              padding: '0 var(--space-xl) var(--space-3xl)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-md)',
            }}
          >
            {prevPage ? (
              <a
                href={`#${prevPage.path}`}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = prevPage.path.slice(1)
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  backgroundColor: 'var(--surface)',
                  transition: 'border-color 0.15s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: 'var(--text-xs)',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Previous
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: 'var(--text-base)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginTop: 'var(--space-xs)',
                  }}
                >
                  {prevPage.label}
                </span>
              </a>
            ) : (
              <div />
            )}
            {nextPage ? (
              <a
                href={`#${nextPage.path}`}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = nextPage.path.slice(1)
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  backgroundColor: 'var(--surface)',
                  transition: 'border-color 0.15s ease',
                  textAlign: 'right',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: 'var(--text-xs)',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Next
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: 'var(--text-base)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginTop: 'var(--space-xs)',
                  }}
                >
                  {nextPage.label}
                </span>
              </a>
            ) : (
              <div />
            )}
          </nav>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-light)',
          padding: 'var(--space-xl)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: 'var(--text-sm)',
            color: 'var(--ink-muted)',
          }}
        >
          {currentPage?.label || 'ePortfolio'}
        </p>
      </footer>
    </>
  )
}
