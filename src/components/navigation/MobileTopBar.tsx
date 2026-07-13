import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteMeta } from '@/data/site'
import { NavigationList } from './NavigationList'

export function MobileTopBar() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
  const hasOpenedRef = useRef(false)
  const close = useCallback(() => setOpen(false), [])

  // Escape closes the drawer.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    const background = [
      document.querySelector<HTMLElement>('.epf-sidebar'),
      document.querySelector<HTMLElement>('.epf-main'),
    ]

    document.body.style.overflow = open ? 'hidden' : ''
    background.forEach((element) => {
      if (element) element.inert = open
    })

    if (open) {
      hasOpenedRef.current = true
      requestAnimationFrame(() => drawerRef.current?.querySelector<HTMLAnchorElement>('a')?.focus())
    } else if (hasOpenedRef.current) {
      menuButtonRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
      background.forEach((element) => {
        if (element) element.inert = false
      })
    }
  }, [open])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const closeAtDesktop = () => {
      if (desktopQuery.matches) close()
    }
    desktopQuery.addEventListener('change', closeAtDesktop)
    return () => desktopQuery.removeEventListener('change', closeAtDesktop)
  }, [close])

  return (
    <>
      <header className="epf-topbar">
        <Link to="/" className="epf-brand" aria-label={`${siteMeta.wordmark} - home`}>
          <span className="epf-brand-mark" aria-hidden="true" />
          <span className="epf-brand-name">{siteMeta.wordmark}</span>
        </Link>
        <button
          type="button"
          className="epf-menu-btn"
          ref={menuButtonRef}
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
        ref={drawerRef}
        className={`epf-drawer${open ? ' is-open' : ''}`}
        aria-label="Sections"
        aria-hidden={!open}
        inert={!open}
      >
        <NavigationList drawer onNavigate={close} />
      </nav>
    </>
  )
}
