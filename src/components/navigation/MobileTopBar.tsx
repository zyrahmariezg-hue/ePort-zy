import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { pages } from '@/data/navigation'
import { siteMeta } from '@/data/site'

export function MobileTopBar() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  // Escape closes the drawer.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="epf-topbar">
        <Link to="/" className="epf-brand" aria-label={`${siteMeta.wordmark} — home`}>
          <span className="epf-brand-mark" aria-hidden="true" />
          <span className="epf-brand-name">{siteMeta.wordmark}</span>
        </Link>
        <button
          type="button"
          className="epf-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="epf-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </header>

      <div
        className={`epf-scrim${open ? ' is-open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        id="epf-drawer"
        className={`epf-drawer${open ? ' is-open' : ''}`}
        aria-label="Sections"
        aria-hidden={!open}
      >
        <ol className="epf-navlist">
          {pages.map((page, i) => (
            <li key={page.key}>
              <NavLink
                to={page.path}
                end={page.path === '/'}
                className="epf-navitem epf-navitem--drawer"
                data-tone={i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'green' : 'rose'}
                tabIndex={open ? 0 : -1}
                onClick={close}
              >
                <span className="epf-navitem-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="epf-navitem-label">{page.label}</span>
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
