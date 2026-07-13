type InterviewMoment = {
  quote: string
  context: string
  insight: string
}

type Participant = {
  id: string
  label: string
  tone: 'rose' | 'blue'
  summary: string[]
  moments: InterviewMoment[]
}

// Content is verbatim from docs/all-info.md (Interview Highlights section).
// Keep participant wording, language, context, and insights unchanged.
const participants: Participant[] = [
  {
    id: 'participant-01',
    label: 'Parent Participant 01',
    tone: 'rose',
    summary: [
      'Participant 01 is a mother caring for a child with a disability. She shared that her daughter lives an ordinary life and is generally doing well despite her condition. Although there are times when her child suddenly shouts, these moments are only occasional. As a parent, she continues to care for and patiently support her daughter every day, especially in school, where she has been consistently guiding her since 2020.',
      'The participant also shared that there were times when her daughter experienced bullying. However, because of her condition, she does not fully understand when others treat her unfairly and does not respond with anger. At the same time, the participant recognized that there are still people who accept and understand her daughter. Reflecting on her experiences, she hopes that people will treat children with disabilities with kindness and never make them feel different or less valued because of their condition.',
    ],
    moments: [
      {
        quote: 'Tinitiyaga ko talaga siya sa school araw-araw.',
        context: 'The participant shared how they patiently supported and accompanied their child every day despite the challenges they encountered.',
        insight: "Caring for a child with special needs requires patience, commitment, and consistency. Small but continuous acts of support can greatly influence a child's growth and confidence.",
      },
      {
        quote: 'Iparamdam mo na mahal sila, yung pagmamahal, yung pag-aasikaso.',
        context: 'The participant emphasized that children with special needs should always feel loved, valued, and cared for instead of being judged or treated differently.',
        insight: 'Love and acceptance are essential in helping children with special needs develop self-worth. A supportive environment allows them to feel respected and included in society.',
      },
      {
        quote: 'Parang binubully pero hindi naman siya nakakaintindi.',
        context: 'The participant shared that the child experienced bullying but was not fully aware of what was happening because of their condition.',
        insight: 'Children with special needs may not always recognize harmful behavior, making it even more important for parents, teachers, and communities to protect them from bullying.',
      },
      {
        quote: 'Okay lang naman siya kasi hindi rin naman siya katulad ng iba... wala lang, normal lang.',
        context: 'The participant described their child as someone who lives an ordinary life despite having a disability.',
        insight: "Parents often choose to focus on their child's abilities rather than limitations. This perspective encourages a more positive and accepting view of disability.",
      },
    ],
  },
  {
    id: 'participant-02',
    label: 'Parent Participant 02',
    tone: 'blue',
    summary: [
      "Participant 02 shared that caring for a child with a disability has become part of their everyday life. According to the participant, their child's condition is generally okay, and they noticed significant improvement after attending a SPED program. Through the support and education he received, he developed important skills that helped him in his daily life.",
      'The participant also shared that their child experienced both acceptance and bullying. While many classmates understood and accepted him, he became a victim of bullying during elementary school, which led to a meeting in the principal\'s office. As a parent, the participant continues to guide and teach their child at home, even after he stopped attending school. They also shared that discrimination from some teachers discouraged him from continuing his education. Despite these challenges, the participant believes that continuous guidance, patience, and acceptance are important in helping children with disabilities live meaningful lives.',
    ],
    moments: [
      {
        quote: "Nung elementary siya, nakaranas siya ng bullying. Nakasapit kaming Principal's Office. Dumating kami sa point na pinatanggal ko yung nagbully sa school.",
        context: 'The participant described how their child experienced bullying during elementary school. The situation became serious enough that the parent sought help from the school administration to protect their child.',
        insight: 'Children with special needs remain vulnerable to bullying despite efforts to promote inclusion. This experience highlights the importance of creating a safe school environment where every child is protected and respected.',
      },
      {
        quote: 'Kailangan mas ikaw muna ang tumanggap sa kanya kung ano siya.',
        context: "The participant shared that parents must first accept their child's condition before expecting acceptance from other people. They reflected on their own journey of gradually accepting their child after receiving guidance from doctors and teachers.",
        insight: "Parental acceptance is the foundation of a child's emotional well-being. When parents embrace their child's condition, they become better prepared to provide love, guidance, and confidence.",
      },
      {
        quote: 'Tinuturo pa rin namin kung ano yung mga natutunan niya sa school. Parang may gabay pa rin.',
        context: 'The participant explained that even though the child no longer attends school, the family continues teaching and guiding them at home.',
        insight: 'Learning does not end inside the classroom. Continuous parental guidance plays an important role in helping children with special needs continue their development.',
      },
      {
        quote: 'Tahimik lang kasi siya. Hindi siya ganoong nakikihalubilo. Meron naman, pag nararamdaman niya na natanggap siya, ganoon.',
        context: 'The participant described how the child usually stayed quiet and avoided social interactions. However, the child became more comfortable and open when they felt accepted by others.',
        insight: 'Acceptance creates a safe space where children with special needs can express themselves more confidently. Feeling included helps improve their social interactions.',
      },
      {
        quote: 'Kami noon sumasama din kami kung paano sila i-handle sa loob ng bahay.',
        context: 'The participant explained that they joined SPED activities and training to learn how to properly support and care for their child at home.',
        insight: "Parents play an important role in their child's development. Learning effective caregiving strategies helps families better support children with special needs.",
      },
      {
        quote: 'Nagkaroon siya ng diskriminasyon sa mga teacher niya dito. Kaya ayaw na niya. Kahit senior high, ayaw na niya.',
        context: "The participant shared that negative experiences with some teachers affected the child's willingness to continue studying.",
        insight: "The attitudes of educators can greatly influence a child's educational experience. Respectful and inclusive teaching practices encourage students with special needs to stay engaged in school.",
      },
      {
        quote: 'Huwag nilang itago... kailangan mas ikaw muna ang tumanggap sa kanya.',
        context: "The participant advised parents not to hide their child's condition and to accept them wholeheartedly before expecting acceptance from others.",
        insight: "Acceptance begins within the family. When parents openly embrace their child's condition, they build a stronger support system and help reduce stigma.",
      },
      {
        quote: 'Habang nag-aaral siya, na-develop siya nung nasa SPED.',
        context: "The participant observed noticeable improvements in the child's development while attending the SPED program.",
        insight: 'Special education programs provide opportunities for children with special needs to develop important academic, social, and life skills.',
      },
      {
        quote: 'Kaya noon pinaka-counseling ko yan.',
        context: "The participant sought counseling to better understand and support their child's situation and future.",
        insight: 'Seeking professional guidance shows that parents do not have to face challenges alone. Counseling can help families make informed decisions and provide better care for their children.',
      },
    ],
  },
]

function Moment({ moment, index }: { moment: InterviewMoment; index: number }) {
  return (
    <li className="epf-interview-moment">
      <article>
        <div className="epf-interview-moment-number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </div>
        <blockquote>
          <p>“{moment.quote}”</p>
        </blockquote>
        <div className="epf-interview-reading">
          <div>
            <h3>Context</h3>
            <p>{moment.context}</p>
          </div>
          <div className="epf-interview-insight">
            <h3>Insight</h3>
            <p>{moment.insight}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

function ParticipantTrack({ participant }: { participant: Participant }) {
  return (
    <section
      className={`epf-interview-track epf-interview-track--${participant.tone}`}
      id={participant.id}
      tabIndex={-1}
      aria-labelledby={`${participant.id}-title`}
    >
      <header className="epf-interview-track-head">
        <div className="epf-interview-speaker-mark" aria-hidden="true">
          <span />
          <span />
        </div>
        <div>
          <p className="epf-interview-speaker-label">Conversation with</p>
          <h2 id={`${participant.id}-title`}>{participant.label}</h2>
        </div>
        <p className="epf-interview-count">{participant.moments.length} highlighted moments</p>
      </header>

      <div className="epf-interview-summary">
        {participant.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <ol className="epf-interview-moments">
        {participant.moments.map((moment, index) => (
          <Moment key={moment.quote} moment={moment} index={index} />
        ))}
      </ol>
    </section>
  )
}

export function InterviewHighlightsPage() {
  const focusParticipant = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    section?.focus({ preventScroll: true })
  }

  return (
    <div className="epf-interview">
      <header className="epf-interview-masthead">
        <div>
          <h1>Interview Highlights</h1>
          <p>
            The information presented in this portfolio reflects the participants’ experiences
            as faithfully as possible.
          </p>
        </div>
        <nav aria-label="Interview participants">
          {participants.map((participant) => (
            <button
              type="button"
              className={`epf-interview-jump epf-interview-jump--${participant.tone}`}
              onClick={() => focusParticipant(participant.id)}
              key={participant.id}
            >
              <span aria-hidden="true" />
              {participant.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="epf-interview-key" aria-label="Reading key">
        <span><i className="epf-interview-key-quote" aria-hidden="true" />Participant voice</span>
        <span><i className="epf-interview-key-context" aria-hidden="true" />Context</span>
        <span><i className="epf-interview-key-insight" aria-hidden="true" />Insight gained</span>
      </div>

      {participants.map((participant) => (
        <ParticipantTrack participant={participant} key={participant.id} />
      ))}
    </div>
  )
}
