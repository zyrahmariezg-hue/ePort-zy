import { Link, NavLink } from 'react-router-dom'
import { pages } from '@/data/navigation'
import { siteMeta, coverMeta } from '@/data/site'

export function Sidebar() {
  return (
    <aside className="epf-sidebar" aria-label="Portfolio contents">
      <Link to="/" className="epf-brand" aria-label={`${siteMeta.wordmark} — home`}>
        <span className="epf-brand-mark" aria-hidden="true" />
        <span className="epf-brand-text">
          <span className="epf-brand-name">{siteMeta.wordmark}</span>
          <span className="epf-brand-sub">
            {coverMeta.subject} · {coverMeta.gradeSection}
          </span>
        </span>
      </Link>

      <nav aria-label="Sections">
        <ol className="epf-navlist">
          {pages.map((page, i) => (
            <li key={page.key}>
              <NavLink
                to={page.path}
                end={page.path === '/'}
                className="epf-navitem"
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

      <p className="epf-sidebar-foot">{coverMeta.date}</p>
    </aside>
  )
}
