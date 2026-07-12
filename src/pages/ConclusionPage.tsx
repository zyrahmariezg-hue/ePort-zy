import { Link } from 'react-router-dom'
import { VoiceMark } from '@/components/cover/VoiceMark'
import { coverMeta } from '@/data/site'
import '@/styles/conclusion.css'

/* The written conclusion is the group's own closing text. It is NOT present in
   docs/all-info.md (the "CONCLUSION" heading there holds only reference
   citations, which belong to the References page), so this page marks that
   text as an honest placeholder rather than fabricating a conclusion.

   Everything shown as real content is drawn from existing, authored material:
   the three movements and the guiding line both come verbatim from
   src/data/site.ts (coverMeta), which sources them from docs/all-info.md. */

// The three movements return here to close the loop opened on the Cover.
const movementPaths: Record<string, string> = {
  'Community Engagement': '/community-engagement',
  'Philosophical Reflection': '/philosophical-reflection',
  'Personal Reflection': '/personal-reflection',
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M13.2 3.3 16.7 6.8 6.9 16.6l-4 .5.5-4L13.2 3.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11.6 4.9 15.1 8.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ConclusionPage() {
  const { movements, theme } = coverMeta

  return (
    <div className="epf-conc">
      <header className="epf-conc-masthead">
        <VoiceMark className="epf-conc-voicemark" />
        <div>
          <p className="epf-conc-eyebrow">In closing</p>
          <h1>Conclusion</h1>
        </div>
      </header>

      <section className="epf-conc-section" aria-labelledby="conc-gather-title">
        <div className="epf-conc-section-head">
          <h2 id="conc-gather-title">The journey, gathered</h2>
          <p>
            Three movements carried this portfolio — the community we met, the questions we asked,
            and the way listening changed us. Here they are, together, one last time.
          </p>
        </div>

        <ol className="epf-conc-movements">
          {movements.map((movement) => (
            <li className="epf-conc-movement" data-tone={movement.tone} key={movement.title}>
              <Link className="epf-conc-movement-link" to={movementPaths[movement.title] ?? '/'}>
                <span className="epf-conc-movement-index" aria-hidden="true">{movement.index}</span>
                <span className="epf-conc-movement-text">
                  <span>{movement.title}</span>
                  <p>{movement.note}</p>
                </span>
                <span className="epf-conc-movement-go" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="epf-conc-section" aria-labelledby="conc-closing-title">
        <div className="epf-conc-section-head">
          <h2 id="conc-closing-title">The group's closing words</h2>
        </div>

        <div className="epf-conc-slot">
          <p className="epf-conc-slot-label">
            <PencilIcon />
            Conclusion — to be written by the group
          </p>
          <p>
            The group's written conclusion belongs here: a summary of what they learned across the
            interviews and reflections, and why philosophical reflection is essential in
            understanding persons and communities.
          </p>
          <div className="epf-conc-slot-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <aside className="epf-conc-endpaper" aria-label="The portfolio's guiding line">
        <VoiceMark className="epf-conc-endpaper-mark" />
        <p className="epf-conc-endpaper-label">The line this portfolio set out with</p>
        <p className="epf-conc-endpaper-line">{theme}</p>
        <span className="epf-conc-endpaper-seam" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </aside>
    </div>
  )
}
