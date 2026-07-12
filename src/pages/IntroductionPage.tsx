import { PageHeader } from '@/components/ui/PageHeader'

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
      <PageHeader title="Introduction" />

      <p className="epf-intro-lede">{lede}</p>

      <div className="epf-intro-brief">
        {briefs.map((brief) => (
          <section className={`epf-intro-row epf-intro-row--${brief.tone}`} key={brief.label}>
            <h2 className="epf-intro-row-label">{brief.label}</h2>
            <p className="epf-intro-row-body">{brief.body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
