import { Link } from 'react-router-dom'
import { pages } from '@/data/navigation'
import { NavLink } from './NavLink'
import { MobileMenu } from './MobileMenu'

export function TopNav() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        backgroundColor: 'rgba(250, 251, 253, 0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border-light)',
        zIndex: 50,
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: '72rem',
          height: '100%',
          margin: '0 auto',
          padding: '0 var(--space-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: 'var(--text-lg)',
            fontWeight: 700,
            color: 'var(--ink)',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          ePortfolio
        </Link>

        {/* Desktop nav */}
        <ul
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-lg)',
            listStyle: 'none',
          }}
        >
          {pages.map((page) => (
            <li key={page.key}>
              <NavLink to={page.path} label={page.label} />
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <MobileMenu />
      </nav>
    </header>
  )
}
