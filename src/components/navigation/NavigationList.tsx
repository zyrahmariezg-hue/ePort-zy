import { NavLink } from 'react-router-dom'
import { pages } from '@/data/navigation'

interface NavigationListProps {
  drawer?: boolean
  onNavigate?: () => void
}

export function NavigationList({ drawer = false, onNavigate }: NavigationListProps) {
  return (
    <ol className="epf-navlist">
      {pages.map((page, index) => (
        <li key={page.key}>
          <NavLink
            to={page.path}
            end={page.path === '/'}
            className={`epf-navitem${drawer ? ' epf-navitem--drawer' : ''}`}
            data-tone={page.tone}
            tabIndex={drawer ? 0 : undefined}
            onClick={onNavigate}
          >
            <span className="epf-navitem-num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="epf-navitem-label">{page.label}</span>
          </NavLink>
        </li>
      ))}
    </ol>
  )
}
