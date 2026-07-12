/* All prose below is verbatim from docs/all-info.md ("COMMUNITY ENGAGEMENT",
   "The Research Process", "Ethical Conduct"). Wording, language, and order are
   preserved; only structural labels/headings frame the existing content. */

const setting = {
  place: 'Tagumpay Housing, Rodriguez, Rizal',
  date: 'July 8, 2026',
}

type Person = {
  id: string
  tone: 'rose' | 'blue'
  label: string
  name: string
  body: string
}

const people: Person[] = [
  {
    id: 'participant-01',
    tone: 'rose',
    label: 'Parent Participant 01',
    name: 'A mother and her daughter',
    body: 'She is a mother with a daughter who has autism. Her child requires constant care and attention, as she cannot be left unattended. The mother makes sure to provide the support and guidance her child needs in their daily life.',
  },
  {
    id: 'participant-02',
    tone: 'blue',
    label: 'Parent Participant 02',
    name: 'A mother and her son',
    body: 'She is also a mother with a son who has Autism Spectrum Disorder. Her child is able to understand things, but he still requires constant care, guidance, and continuous teaching to support his development and daily activities.',
  },
]

const process = [
  {
    title: 'Consent and Permission',
    body: 'Before conducting the interview, we asked for the parents’ permission to take records and pictures during the process. We also informed them that taking pictures was completely optional and that they could refuse if they were not comfortable. We made sure that they understood the purpose of the interview before proceeding.',
  },
  {
    title: 'Interview',
    body: 'We personally visited the parents at their homes to conduct the interviews. Instead of strictly following a set of questions, we approached the conversation in a more natural and comfortable way, similar to having a simple conversation. This allowed them to freely share their experiences, thoughts, and feelings.',
  },
  {
    title: 'Transcription',
    body: 'After the interviews, we carefully organized and transcribed their responses. We removed their real names and any information that could identify them or their children to protect their privacy and confidentiality.',
  },
  {
    title: 'Review and Analysis',
    body: 'We reviewed the transcripts to ensure that we fully understood their experiences and perspectives. Afterward, we identified the common themes found between the two interviews and reflected on how these themes relate to the community and the experiences of families caring for children with disabilities.',
  },
]

const ethosLede =
  'Throughout the interview process, we remained committed to protecting the participants’ rights, privacy, and dignity. Every stage of the interview and documentation was guided by ethical principles to ensure that their experiences were represented honestly and respectfully.'

const commitments = [
  {
    title: 'Privacy and Confidentiality',
    body: 'To protect the identities of the participants and their children, no real names or personal information were included in this portfolio. Instead, they are referred to as Parent Participant 1 and Parent Participant 2. Any details that could reveal their identity were omitted to maintain their privacy and confidentiality.',
  },
  {
    title: 'Respectful Engagement',
    body: 'We approached each interview with sensitivity, respect, and empathy. We recognized that discussing their children’s experiences could be emotional, so we allowed the participants to answer only what they were comfortable sharing. Their thoughts and experiences were listened to without judgment or pressure.',
  },
  {
    title: 'Accurate and Honest Representation',
    body: 'The information presented in this portfolio reflects the participants’ experiences as faithfully as possible. Their responses were carefully interpreted without changing their intended meaning, and any reflections or interpretations were clearly distinguished from their actual statements. This ensured that their voices remained authentic and were represented with honesty and integrity.',
  },
]

const romanNumerals = ['i', 'ii', 'iii']

/** A map-ping "place" mark for the dateline — where the engagement happened. */
function PlaceMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" opacity="0.28" />
      <circle cx="24" cy="24" r="13.5" stroke="currentColor" strokeWidth="2.5" opacity="0.55" />
      <circle cx="24" cy="24" r="5" fill="currentColor" />
    </svg>
  )
}

/**
 * A participant "presence" mark — nested listening ripples in the person's
 * voice color, echoing the cover's VoiceMark. A human presence without a face:
 * the identity stays withheld, as the confidentiality commitment requires.
 */
function PresenceMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 52 A18 18 0 0 0 2 34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
      <path d="M32 52 A30 30 0 0 0 2 22" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" opacity="0.6" />
      <path d="M44 52 A42 42 0 0 0 2 10" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" opacity="0.32" />
      <circle cx="4" cy="52" r="3.5" fill="currentColor" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M10 2.5 3.5 5v4.2c0 3.9 2.6 6.6 6.5 8.3 3.9-1.7 6.5-4.4 6.5-8.3V5L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m7.4 10 1.9 1.9 3.5-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CommunityEngagementPage() {
  return (
    <div className="epf-ce">
      <header className="epf-ce-masthead">
        <p className="epf-ce-eyebrow">A home visit</p>
        <h1>Community Engagement</h1>

        <dl className="epf-ce-dateline">
          <PlaceMark className="epf-ce-place-mark" />
          <span className="epf-ce-dateline-rule" aria-hidden="true" />
          <div className="epf-ce-fact">
            <dt>Setting</dt>
            <dd>{setting.place}</dd>
          </div>
          <div className="epf-ce-fact">
            <dt>Interview date</dt>
            <dd>{setting.date}</dd>
          </div>
        </dl>
      </header>

      <section className="epf-ce-section" aria-labelledby="ce-people-title">
        <div className="epf-ce-section-head">
          <span className="epf-ce-section-index" aria-hidden="true">01</span>
          <h2 id="ce-people-title">The participants</h2>
        </div>

        <div className="epf-ce-people">
          {people.map((person) => (
            <article className="epf-ce-person" data-tone={person.tone} key={person.id}>
              <header className="epf-ce-person-head">
                <PresenceMark className="epf-ce-presence" />
                <div>
                  <p className="epf-ce-person-id">{person.label}</p>
                  <p className="epf-ce-person-name">{person.name}</p>
                </div>
              </header>
              <p className="epf-ce-person-body">{person.body}</p>
              <p className="epf-ce-person-tag">
                <ShieldIcon />
                Identity kept confidential
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="epf-ce-section" aria-labelledby="ce-process-title">
        <div className="epf-ce-section-head">
          <span className="epf-ce-section-index" aria-hidden="true">02</span>
          <div>
            <h2 id="ce-process-title">The Research Process</h2>
            <p className="epf-ce-section-note">
              How the engagement unfolded, from asking permission to reflecting on what we heard.
            </p>
          </div>
        </div>

        <ol className="epf-ce-trail">
          {process.map((stage, index) => (
            <li className="epf-ce-stage" key={stage.title}>
              <span className="epf-ce-stage-node" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="epf-ce-stage-title">{stage.title}</h3>
              <p className="epf-ce-stage-body">{stage.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="epf-ce-section" aria-labelledby="ce-ethos-title">
        <div className="epf-ce-section-head">
          <span className="epf-ce-section-index" aria-hidden="true">03</span>
          <h2 id="ce-ethos-title">Ethical Conduct</h2>
        </div>

        <p className="epf-ce-ethos-lede">{ethosLede}</p>

        <div className="epf-ce-ledger">
          {commitments.map((commitment, index) => (
            <div className="epf-ce-commitment" key={commitment.title}>
              <span className="epf-ce-commitment-index" aria-hidden="true">
                {romanNumerals[index]}
              </span>
              <div>
                <h3>{commitment.title}</h3>
                <p>{commitment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
