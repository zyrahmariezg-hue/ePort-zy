import { coverMeta } from '@/data/site'
import { VoiceMark } from '@/components/cover/VoiceMark'
import { publicAsset } from '@/data/assets'

const isPlaceholder = (value: string) => value.trimStart().startsWith('[')

// Each member's own voice color: Zyrah (rose), Zhaina (blue), Bowen (green).
// Order matches the members array in coverMeta.
const memberTones = ['rose', 'blue', 'green'] as const

// These portrait pairings follow the supplied image set and the exact member
// order verified in docs/all-info.md. Keeping them beside the cover composition
// makes the association explicit rather than inferring it from filenames at render time.
const memberPortraits = [
  { filename: 'zyrah.png', alt: 'Portrait of Zyrah Mariez P. Grandeza' },
  { filename: 'zhaina.png', alt: 'Portrait of Zhaina Jhazelle M. Morden' },
  { filename: 'bowen.png', alt: 'Portrait of Daniel Bowen N. Mutuc' },
] as const

export function CoverPage() {
  const {
    group,
    kicker,
    title,
    subtitle,
    theme,
    members,
    subject,
    gradeSection,
    teacher,
    date,
    schoolYear,
    movements,
  } = coverMeta

  const facts = [
    { label: 'Subject', value: subject },
    { label: 'Grade & Section', value: gradeSection },
    { label: 'Teacher', value: teacher },
    { label: 'Date', value: date },
    { label: 'School Year', value: schoolYear },
  ]

  return (
    <section className="epf-cover" aria-labelledby="cover-title">
      <VoiceMark className="epf-cover-backdrop" />

      <span className="epf-cover-seam" aria-hidden="true" />

      <header className="epf-cover-masthead">
        <VoiceMark className="epf-cover-voicemark" />
        <p className="epf-cover-imprint">
          <span className="epf-cover-group">{group}</span>
          <span className="epf-cover-imprint-dot" aria-hidden="true" />
          <span className="epf-cover-imprint-kicker">{kicker}</span>
        </p>
      </header>

      <div className="epf-cover-lockup">
        <div className="epf-cover-headline">
          <h1 id="cover-title" className="epf-cover-title">
            {title}
          </h1>
          <p className="epf-cover-subtitle">{subtitle}</p>
          <p className="epf-cover-theme">{theme}</p>
        </div>

        <ol className="epf-cover-index" aria-label="The three movements of this portfolio">
          {movements.map((movement) => (
            <li
              key={movement.title}
              className="epf-cover-movement"
              data-tone={movement.tone}
            >
              <span className="epf-cover-movement-index" aria-hidden="true">
                {movement.index}
              </span>
              <span className="epf-cover-movement-body">
                <span className="epf-cover-movement-title">{movement.title}</span>
                <span className="epf-cover-movement-note">{movement.note}</span>
              </span>
            </li>
          ))}
        </ol>

        <section className="epf-cover-contributors" aria-labelledby="cover-contributors-title">
          <div className="epf-cover-contributors-heading">
            <p id="cover-contributors-title">Group Members</p>
            <span aria-hidden="true">Three voices, one listening practice</span>
          </div>
          <ol className="epf-cover-portraits">
            {members.map((name, i) => {
              const portrait = memberPortraits[i]
              const tone = memberTones[i % memberTones.length]

              return (
                <li key={name} className="epf-cover-portrait" data-tone={tone}>
                  <figure>
                    <div className="epf-cover-portrait-image">
                      <img
                        src={publicAsset(portrait.filename)}
                        alt={portrait.alt}
                        width="300"
                        height="300"
                      />
                    </div>
                    <figcaption>
                      <span className="epf-cover-portrait-number" aria-hidden="true">
                        0{i + 1}
                      </span>
                      <span>{name}</span>
                    </figcaption>
                  </figure>
                </li>
              )
            })}
          </ol>
        </section>
      </div>

      <dl className="epf-cover-colophon">
        <div className="epf-cover-facts">
          {facts.map((fact) => (
            <div className="epf-cover-fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd className={isPlaceholder(fact.value) ? 'is-placeholder' : undefined}>
                {fact.value}
              </dd>
            </div>
          ))}
        </div>
      </dl>
    </section>
  )
}
