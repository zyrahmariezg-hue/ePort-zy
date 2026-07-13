import '@/styles/conclusion.css'

// Approved conclusion copy supplied for this page. It is intentionally kept as
// one source string so the group's wording, order, and punctuation stay intact.
const conclusion =
  'This e-portfolio represents our shared learning journey, highlighting the knowledge, skills, and experiences we gained throughout our academic work. Each project and activity included in this portfolio reflects our teamwork, dedication, and commitment to producing meaningful outputs while overcoming challenges together. Through this experience, we not only strengthened our understanding of the lessons but also developed important values such as collaboration, responsibility, communication, and perseverance. As we continue our academic journey, we will carry these lessons and experiences with us as we strive to grow, improve, and achieve our future goals. Overall, this e-portfolio stands as a reflection of our collective efforts and continuous pursuit of learning and excellence.'

export function ConclusionPage() {
  return (
    <article className="epf-conclusion" aria-labelledby="conclusion-title">
      <header className="epf-conclusion-masthead">
        <div className="epf-conclusion-marker" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div>
          <p>Closing chapter</p>
          <h1 id="conclusion-title">Conclusion</h1>
        </div>
      </header>

      <section className="epf-conclusion-reading" aria-label="Final reflection">
        <aside className="epf-conclusion-margin" aria-hidden="true">
          <span />
          <span />
          <span />
        </aside>
        <p>{conclusion}</p>
      </section>

      <footer className="epf-conclusion-coda" aria-label="End of conclusion">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </footer>
    </article>
  )
}
