import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { pages } from '@/data/navigation'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const close = useCallback(() => setIsOpen(false), [])

  // Close on route change
  useEffect(() => {
    close()
  }, [location.pathname, close])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, close])

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        style={{
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2.5rem',
          height: '2.5rem',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: 'var(--ink)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--nav-height)',
            backgroundColor: 'rgba(26, 31, 46, 0.2)',
            zIndex: 40,
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          backgroundColor: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
          zIndex: 45,
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'transform 0.2s ease, opacity 0.2s ease',
          maxHeight: 'calc(100dvh - var(--nav-height))',
          overflowY: 'auto',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 'var(--space-lg) var(--space-xl)',
          }}
        >
          {pages.map((page) => {
            const isActive = location.pathname === page.path
            return (
              <li key={page.key}>
                <Link
                  to={page.path}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    display: 'block',
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: 'var(--text-lg)',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--accent)' : 'var(--ink)',
                    textDecoration: 'none',
                    padding: 'var(--space-md) 0',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  {page.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
