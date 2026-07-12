type StudentVoice = {
  name: 'Zyrah' | 'Zhaina' | 'Bowen'
  tone: 'blue' | 'rose' | 'green'
  response: string
}

type Inquiry = {
  question: string
  voices: StudentVoice[]
}

// Questions and student responses are verbatim from docs/all-info.md.
const inquiries: Inquiry[] = [
  {
    question: 'What did you learn about being human from the participant?',
    voices: [
      {
        name: 'Zyrah',
        tone: 'blue',
        response: 'I learned that being human means showing love, patience, and compassion despite life’s challenges. The parents’ experiences reminded me that every person deserves respect, care, and acceptance regardless of their condition.',
      },
      {
        name: 'Zhaina',
        tone: 'rose',
        response: 'From the interviews, I learned that being human means showing love, patience, and understanding despite challenges. Both parents continuously supported and guided their children every day. Even when their children experienced bullying or had difficulty socializing, they never gave up on them. Their experiences showed that every person deserves care, respect, and acceptance regardless of their condition.',
      },
      {
        name: 'Bowen',
        tone: 'green',
        response: "I learned that being human means showing love, patience, and understanding regardless of a person's condition. Every child deserves to be accepted, respected, and treated with dignity.",
      },
    ],
  },
  {
    question: 'What social realities were revealed?',
    voices: [
      {
        name: 'Zyrah',
        tone: 'blue',
        response: 'The interviews showed that people with disabilities still experience bullying and discrimination. However, they also revealed that supportive families, teachers, classmates, and SPED programs can help them feel accepted and included.',
      },
      {
        name: 'Zhaina',
        tone: 'rose',
        response: 'The interviews revealed that people with disabilities still experience discrimination and bullying. One participant shared that her child was sometimes bullied, while another participant shared that her child experienced bullying in elementary school and even faced discrimination from teachers, which caused him to stop attending school. At the same time, the interviews also showed that there are people, classmates, teachers, and SPED programs that help children feel accepted and supported.',
      },
      {
        name: 'Bowen',
        tone: 'green',
        response: 'The interview revealed that children with special needs still experience bullying, discrimination, and misunderstanding. However, it also showed that there are people who are willing to accept and support them.',
      },
    ],
  },
  {
    question: 'How did this experience challenge your previous beliefs?',
    voices: [
      {
        name: 'Zyrah',
        tone: 'blue',
        response: 'Before the interview, I thought their biggest challenge was their disability. After listening to the participants, I realized that many of their struggles come from society’s lack of understanding and acceptance.',
      },
      {
        name: 'Zhaina',
        tone: 'rose',
        response: 'Before the interview, I thought that the main difficulty of people with disabilities was their condition itself. After listening to the parents, we realized that many of their struggles come from how some people treat them. I also realized that family support, patience, and an accepting environment can greatly improve their confidence and development.',
      },
      {
        name: 'Bowen',
        tone: 'green',
        response: "Before the interview, I thought that a child's disability was their biggest challenge. After listening to the participants, I realized that the greater challenge is society's lack of acceptance and understanding.",
      },
    ],
  },
  {
    question: 'How does the experience relate to human dignity, freedom, empathy, and transcendence?',
    voices: [
      {
        name: 'Zyrah',
        tone: 'blue',
        response: 'The interviews reflected human dignity by emphasizing equal respect for people with disabilities. Empathy was shown through the parents’ love and patience, freedom through opportunities to learn and grow, and transcendence through their perseverance despite difficulties.',
      },
      {
        name: 'Zhaina',
        tone: 'rose',
        response: 'The interviews showed human dignity because both parents emphasized that their children should never be treated as "less" or called hurtful names. They wanted others to make their children feel loved and valued. Empathy was shown through the parents patience, guidance, and understanding of their children\'s needs. Freedom was seen when the children were given opportunities to learn through SPED and continue developing at home with their parents support. Transcendence was shown in how the parents continued caring, teaching, and encouraging their children despite years of challenges, discrimination, and difficulties.',
      },
      {
        name: 'Bowen',
        tone: 'green',
        response: 'The experience showed that every person has dignity regardless of their disability. It also highlighted the importance of empathy, respecting their freedom to grow, and helping them overcome challenges through love and support.',
      },
    ],
  },
  {
    question: 'How can society become more inclusive?',
    voices: [
      {
        name: 'Zyrah',
        tone: 'blue',
        response: 'Society can become more inclusive by preventing bullying and discrimination, promoting respect and acceptance, and strengthening inclusive education so people with disabilities are treated equally and given opportunities to thrive.',
      },
      {
        name: 'Zhaina',
        tone: 'rose',
        response: 'Based on the interviews, society can become more inclusive by avoiding bullying and discrimination, treating people with disabilities with respect, and making them feel accepted instead of different. Schools should continue promoting inclusive education like SPED and ensure that teachers and students understand how to support learners with disabilities. Families and communities should also continue showing patience, love, and guidance so that people with disabilities can feel valued and included.',
      },
      {
        name: 'Bowen',
        tone: 'green',
        response: 'Society can become more inclusive by treating people with special needs equally, avoiding discrimination, promoting awareness, and creating environments where they feel accepted, respected, and supported.',
      },
    ],
  },
]

function InquiryThreshold({ inquiry, index }: { inquiry: Inquiry; index: number }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <li className="epf-philosophy-threshold">
      <section aria-labelledby={`inquiry-${number}`}>
        <header className="epf-philosophy-question">
          <span aria-hidden="true">{number}</span>
          <h2 id={`inquiry-${number}`}>{inquiry.question}</h2>
        </header>

        <div className="epf-philosophy-voices" aria-label={`Student reflections on question ${index + 1}`}>
          {inquiry.voices.map((voice) => (
            <article className={`epf-philosophy-voice epf-philosophy-voice--${voice.tone}`} key={voice.name}>
              <header>
                <span aria-hidden="true" />
                <h3>{voice.name}</h3>
              </header>
              <p>{voice.response}</p>
            </article>
          ))}
        </div>
      </section>
    </li>
  )
}

export function PhilosophicalReflectionPage() {
  return (
    <div className="epf-philosophy">
      <header className="epf-philosophy-masthead">
        <div className="epf-philosophy-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div>
          <p>Philosophical Reflection</p>
          <h1>Five questions, three perspectives</h1>
        </div>
        <p className="epf-philosophy-intro">
          Through the interview and community engagement, you will philosophically reflect on
          the participant&apos;s lived experiences by analyzing their perspectives, social realities,
          and challenges.
        </p>
      </header>

      <div className="epf-philosophy-legend" aria-label="Student voice key">
        <span className="epf-philosophy-legend--blue"><i aria-hidden="true" />Zyrah</span>
        <span className="epf-philosophy-legend--rose"><i aria-hidden="true" />Zhaina</span>
        <span className="epf-philosophy-legend--green"><i aria-hidden="true" />Bowen</span>
      </div>

      <ol className="epf-philosophy-path">
        {inquiries.map((inquiry, index) => (
          <InquiryThreshold inquiry={inquiry} index={index} key={inquiry.question} />
        ))}
      </ol>
    </div>
  )
}
