import '@/styles/introduction.css'

// Content is verbatim from docs/all-info.md (Introduction section).
const opening =
  'It is easy to form opinions about persons with disabilities (PWDs) based on what we see or hear, yet these assumptions rarely reflect the realities of their everyday lives. This interview portfolio serves as an opportunity to move beyond those surface-level perceptions by listening to the firsthand experiences of a person with a disability. Through their story, we hope to better understand the challenges they face, the resilience they demonstrate, and the importance of creating a society that values inclusion, dignity, and equal opportunities. More than simply gathering information, this portfolio encourages reflection on how genuine understanding begins by listening to the voices of those whose experiences are often overlooked.'

const sections = [
  {
    id: 'purpose',
    title: 'Purpose of the Interview',
    tone: 'green',
    body:
      'The purpose of this phenomenological interview is to understand the lived experiences of individuals with disabilities through the perspectives of their parents or guardians. Specifically, it aims to explore their daily lives, the challenges and discrimination they encounter, the support they receive from their families and communities, and the experiences that make them feel accepted and valued. Through these stories, we hope to promote greater empathy, understanding, and inclusion.',
  },
  {
    id: 'phenomenology',
    title: 'Phenomenology and Why Listening Matters',
    tone: 'blue',
    body:
      'Phenomenology helps us understand the lived experiences of individuals through the stories they share. In our interviews, listening to the parents allowed us to better understand the experiences of their children with disabilities, including the bullying, discrimination, acceptance, and support they received. By listening with empathy instead of making assumptions, we gained a deeper appreciation of their realities and the importance of treating every person with dignity and respect.',
  },
] as const

export function IntroductionPage() {
  return (
    <article className="epf-introduction" aria-labelledby="introduction-title">
      <header className="epf-introduction-head">
        <div className="epf-introduction-signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="epf-introduction-titleblock">
          <h1 id="introduction-title">Introduction</h1>
          <span className="epf-introduction-rule" aria-hidden="true" />
        </div>
      </header>

      <section className="epf-introduction-opening" aria-label="Introduction">
        <p>{opening}</p>
      </section>

      <div className="epf-introduction-passages">
        {sections.map((section) => (
          <section
            className={`epf-introduction-passage epf-introduction-passage--${section.tone}`}
            aria-labelledby={`${section.id}-title`}
            key={section.id}
          >
            <div className="epf-introduction-passage-mark" aria-hidden="true" />
            <div className="epf-introduction-passage-copy">
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
