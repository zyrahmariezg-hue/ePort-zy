import { Link } from 'react-router-dom'
import { siteMeta, coverMeta } from '@/data/site'
import { NavigationList } from './NavigationList'

export function Sidebar() {
  return (
    <aside className="epf-sidebar" aria-label="Portfolio contents">
      <Link to="/" className="epf-brand" aria-label={`${siteMeta.wordmark} - home`}>
        <span className="epf-brand-mark" aria-hidden="true" />
        <span className="epf-brand-text">
          <span className="epf-brand-name">{siteMeta.wordmark}</span>
          <span className="epf-brand-sub">
            {coverMeta.subject} · {coverMeta.gradeSection}
          </span>
        </span>
      </Link>

      <nav aria-label="Sections">
        <NavigationList />
      </nav>

      <p className="epf-sidebar-foot">{coverMeta.date}</p>
    </aside>
  )
}
