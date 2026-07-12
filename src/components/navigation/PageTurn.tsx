import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NavPage } from '@/data/navigation'

interface PageTurnProps {
  previous: NavPage | null
  next: NavPage | null
}

export function PageTurn({ previous, next }: PageTurnProps) {
  if (!previous && !next) return null

  return (
    <nav className="epf-pageturn" aria-label="Continue through the portfolio">
      <p className="epf-pageturn-heading">Continue reading</p>
      <div className="epf-pageturn-links">
        {previous ? (
          <Link to={previous.path} className="epf-pageturn-link" data-tone={previous.tone} rel="prev">
            <ArrowLeft aria-hidden="true" />
            <span>
              <span className="epf-pageturn-dir">Previous chapter</span>
              <span className="epf-pageturn-label">{previous.label}</span>
            </span>
          </Link>
        ) : <span aria-hidden="true" />}
        {next ? (
          <Link to={next.path} className="epf-pageturn-link epf-pageturn-link--next" data-tone={next.tone} rel="next">
            <span>
              <span className="epf-pageturn-dir">Next chapter</span>
              <span className="epf-pageturn-label">{next.label}</span>
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        ) : <span aria-hidden="true" />}
      </div>
    </nav>
  )
}
