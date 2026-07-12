import { coverMeta } from '@/data/site'

const isPlaceholder = (value: string) => value.trimStart().startsWith('[')

export function CoverPage() {
  const {
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
  } = coverMeta

  const fields = [
    { label: 'Subject', value: subject },
    { label: 'Grade & Section', value: gradeSection },
    { label: 'Teacher', value: teacher },
    { label: 'Date', value: date },
    { label: 'School Year', value: schoolYear },
  ]

  return (
    <section className="epf-cover" aria-labelledby="cover-title">
      <div className="epf-cover-composition" aria-hidden="true">
        <span className="epf-cover-shape epf-cover-shape--blue" />
        <span className="epf-cover-shape epf-cover-shape--green" />
        <span className="epf-cover-shape epf-cover-shape--rose" />
      </div>

      <div className="epf-cover-intro">
        <p className="epf-cover-kicker">{kicker}</p>
        <h1 id="cover-title" className="epf-cover-title">
          {title}
        </h1>
        <p className="epf-cover-subtitle">{subtitle}</p>

        <div className="epf-cover-rule" aria-hidden="true" />
        <p className="epf-cover-theme">{theme}</p>
      </div>

      <dl className="epf-cover-meta">
        <div className="epf-cover-field epf-cover-field--wide">
          <dt>Group Members</dt>
          <dd>
            <ul className="epf-cover-members">
              {members.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </dd>
        </div>

        {fields.map((field) => (
          <div className="epf-cover-field" key={field.label}>
            <dt>{field.label}</dt>
            <dd className={isPlaceholder(field.value) ? 'is-placeholder' : undefined}>
              {field.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
