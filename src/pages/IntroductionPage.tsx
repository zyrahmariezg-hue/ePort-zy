// Content is verbatim from docs/all-info.md (Introduction section). Do not edit wording.
const lede =
  'It is easy to form opinions about persons with disabilities (PWDs) based on what we see or hear, yet these assumptions rarely reflect the realities of their everyday lives. This interview portfolio serves as an opportunity to move beyond those surface-level perceptions by listening to the firsthand experiences of a person with a disability. Through their story, we hope to better understand the challenges they face, the resilience they demonstrate, and the importance of creating a society that values inclusion, dignity, and equal opportunities. More than simply gathering information, this portfolio encourages reflection on how genuine understanding begins by listening to the voices of those whose experiences are often overlooked.'

const briefs = [
  {
    label: 'Purpose of the Interview',
    tone: 'blue',
    body:
      'The purpose of this phenomenological interview is to understand the lived experiences of individuals with disabilities through the perspectives of their parents or guardians. Specifically, it aims to explore their daily lives, the challenges and discrimination they encounter, the support they receive from their families and communities, and the experiences that make them feel accepted and valued. Through these stories, we hope to promote greater empathy, understanding, and inclusion.',
  },
  {
    label: 'Phenomenology and Why Listening Matters',
    tone: 'green',
    body:
      'Phenomenology helps us understand the lived experiences of individuals through the stories they share. In our interviews, listening to the parents allowed us to better understand the experiences of their children with disabilities, including the bullying, discrimination, acceptance, and support they received. By listening with empathy instead of making assumptions, we gained a deeper appreciation of their realities and the importance of treating every person with dignity and respect.',
  },
]

export function IntroductionPage() {
  return (
    <div className="epf-intro">
      <header className="epf-intro-masthead">
        <div className="epf-intro-masthead-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h1>Introduction</h1>
      </header>

      <section className="epf-intro-opening" aria-label="Introduction overview">
        <div className="epf-intro-opening-accent" aria-hidden="true">
          <span className="epf-intro-opening-dot epf-intro-opening-dot--blue" />
          <span className="epf-intro-opening-dot epf-intro-opening-dot--green" />
          <span className="epf-intro-opening-dot epf-intro-opening-dot--rose" />
        </div>
        <p className="epf-intro-lede">{lede}</p>
      </section>

      <ol className="epf-intro-path" aria-label="Introduction reading path">
        {briefs.map((brief, index) => (
          <li className={`epf-intro-step epf-intro-step--${brief.tone}`} key={brief.label}>
            <article>
              <div className="epf-intro-step-heading">
                <span className="epf-intro-step-count" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2>{brief.label}</h2>
              </div>
              <p>{brief.body}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  )
}
