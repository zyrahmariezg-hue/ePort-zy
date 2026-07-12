import '@/styles/references.css'

const references = [
  'Parent Participant 01. (2026, July 8). Interview on the lived experience of a child with a disability [Personal communication].',
  'Parent Participant 02. (2026, July 8). Interview on the lived experience of a child with a disability [Personal communication].',
]

export function ReferencesPage() {
  return (
    <div className="epf-references">
      <header className="epf-references-masthead">
        <div className="epf-references-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div>
          <p>Appendix</p>
          <h1>References</h1>
        </div>
        <p>
          The information presented in this portfolio reflects the participants’ experiences as
          faithfully as possible.
        </p>
      </header>

      <section className="epf-references-bibliography" aria-labelledby="primary-sources-title">
        <header>
          <div>
            <p>Sources consulted</p>
            <h2 id="primary-sources-title">Primary sources</h2>
          </div>
          <span>{references.length} interviews</span>
        </header>

        <ol>
          {references.map((reference, index) => (
            <li key={reference}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <p>{reference}</p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="epf-references-note" aria-label="Confidentiality note">
        <span aria-hidden="true" />
        <p>
          To protect the identities of the participants and their children, no real names or
          personal information were included in this portfolio.
        </p>
      </aside>
    </div>
  )
}
