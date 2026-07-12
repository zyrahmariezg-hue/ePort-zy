import '@/styles/introduction.css'
import { VoiceMark } from '@/components/cover/VoiceMark'

// Content is verbatim from docs/all-info.md (Introduction section). Do not edit wording.
const lede =
  'It is easy to form opinions about persons with disabilities (PWDs) based on what we see or hear, yet these assumptions rarely reflect the realities of their everyday lives. This interview portfolio serves as an opportunity to move beyond those surface-level perceptions by listening to the firsthand experiences of a person with a disability. Through their story, we hope to better understand the challenges they face, the resilience they demonstrate, and the importance of creating a society that values inclusion, dignity, and equal opportunities. More than simply gathering information, this portfolio encourages reflection on how genuine understanding begins by listening to the voices of those whose experiences are often overlooked.'

// The two framing lenses of the project. Each is tied to the chapter it
// belongs to — the interview/engagement aim reads green, the philosophical
// method reads blue — echoing the Cover's colored movement index. Source
// order (Purpose, then Phenomenology) and wording are preserved exactly.
const lenses = [
  {
    label: 'Purpose of the Interview',
    tone: 'green',
    body:
      'The purpose of this phenomenological interview is to understand the lived experiences of individuals with disabilities through the perspectives of their parents or guardians. Specifically, it aims to explore their daily lives, the challenges and discrimination they encounter, the support they receive from their families and communities, and the experiences that make them feel accepted and valued. Through these stories, we hope to promote greater empathy, understanding, and inclusion.',
  },
  {
    label: 'Phenomenology and Why Listening Matters',
    tone: 'blue',
    body:
      'Phenomenology helps us understand the lived experiences of individuals through the stories they share. In our interviews, listening to the parents allowed us to better understand the experiences of their children with disabilities, including the bullying, discrimination, acceptance, and support they received. By listening with empathy instead of making assumptions, we gained a deeper appreciation of their realities and the importance of treating every person with dignity and respect.',
  },
] as const

export function IntroductionPage() {
  return (
    <div className="epf-intro">
      {/* Threshold masthead — the Cover's three-voice seam and listening mark,
          carried over so turning into the introduction feels continuous. */}
      <header className="epf-intro-masthead">
        <span className="epf-intro-seam" aria-hidden="true" />
        <div className="epf-intro-titlerow">
          <VoiceMark className="epf-intro-voicemark" />
          <h1>Introduction</h1>
        </div>
      </header>

      {/* The opening wall — the project's guiding statement, read first. */}
      <section className="epf-intro-opening" aria-label="Opening statement">
        <p className="epf-intro-lede">{lede}</p>
      </section>

      {/* The two lenses — the aim and the method the project reads through. */}
      <section className="epf-intro-lenses" aria-label="How we approached this">
        {lenses.map((lens) => (
          <article className={`epf-intro-lens epf-intro-lens--${lens.tone}`} key={lens.label}>
            <span className="epf-intro-lens-rule" aria-hidden="true" />
            <h2>{lens.label}</h2>
            <p>{lens.body}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
