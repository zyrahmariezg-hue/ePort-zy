import { Link, useLocation } from 'react-router-dom'

interface NavLinkProps {
  to: string
  label: string
}

export function NavLink({ to, label }: NavLinkProps) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      aria-current={isActive ? 'page' : undefined}
      style={{
        fontFamily: "'Outfit', system-ui, sans-serif",
        fontSize: 'var(--text-sm)',
        fontWeight: isActive ? 600 : 400,
        color: isActive ? 'var(--accent)' : 'var(--ink-secondary)',
        textDecoration: 'none',
        padding: 'var(--space-sm) 0',
        borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </Link>
  )
}
