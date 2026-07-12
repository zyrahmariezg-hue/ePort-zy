import '@/styles/personal.css'

type ReflectionEntry = {
  title: string
  body: string
}

type Reflection = {
  name: 'Zyrah' | 'Zhaina' | 'Bowen'
  tone: 'rose' | 'blue' | 'green'
  entries: ReflectionEntry[]
}

// Content is verbatim from docs/all-info.md (Personal Reflection section).
const reflections: Reflection[] = [
  {
    name: 'Zyrah',
    tone: 'rose',
    entries: [
      {
        title: 'Your own limitations, biases, or assumptions before the interview.',
        body: 'Before the interview, I assumed that people with disabilities were treated differently mainly because of their condition. I also thought some parents might feel uncomfortable discussing their child’s disability, especially after our first interview request was declined. This made me realize the importance of approaching such conversations with empathy and respect.',
      },
      {
        title: 'How did the interview transform your understanding?',
        body: 'The interview helped me realize that many of the challenges faced by people with disabilities come from society’s attitudes rather than their condition. Listening to the parents’ experiences made me better understand the importance of acceptance, empathy, and family support in helping them live with dignity.',
      },
      {
        title: 'What concrete actions will you take to promote inclusion?',
        body: 'I will be more mindful of how I treat and speak to people with disabilities by showing respect and understanding. I will also stand against bullying and discrimination and encourage others to promote acceptance and equal opportunities for everyone.',
      },
    ],
  },
  {
    name: 'Zhaina',
    tone: 'blue',
    entries: [
      {
        title: 'Your own limitations, biases, or assumptions before the interview.',
        body: "Before conducting the interview, I had several assumptions. I used to think that people with disabilities were treated differently mainly because of their condition. I also worried that the parents might feel offended by our questions because I knew that discussing their child's disability could be a sensitive topic. In fact, our first interview request was declined because the parent did not want to talk about their child's condition. That experience made me think that some parents might be afraid of being judged or simply found it painful to revisit those experiences. It reminded me that as interviewers, we should always communicate with empathy and respect.",
      },
      {
        title: 'How the interview transformed your understanding.',
        body: 'The interview changed the way I see people with disabilities. I realized that they are not different because of who they are, rather, they are often treated differently because of how society sees them. Listening to the parents made me understand the sacrifices they make every day just to support and protect their children. It was heartbreaking to hear that some of their children experienced bullying and discrimination even though they had done nothing wrong. This experience made me realize that the real problem is not their disability but the lack of understanding, acceptance, and empathy from some people. Everyone deserves to be treated with dignity, regardless of their condition.',
      },
      {
        title: 'What concrete actions will you take to promote inclusion?',
        body: 'After this interview, I will be more mindful of the words I use and the way I treat people with disabilities. I will avoid making judgments based on someone\'s condition and instead choose to be more understanding and respectful. If I witness bullying or discrimination, I will not stay silent and will encourage others to treat everyone with kindness and acceptance. I also want to help raise awareness that people with disabilities are capable individuals who deserve equal opportunities, respect, and support just like everyone else.',
      },
    ],
  },
  {
    name: 'Bowen',
    tone: 'green',
    entries: [
      {
        title: 'Your own limitations, biases, or assumptions before the interview.',
        body: 'Before the interview, I assumed that children with special needs mainly struggled because of their condition. I did not fully understand the challenges that their families also face every day.',
      },
      {
        title: 'How the interview transformed your understanding.',
        body: 'The interview helped me realize that love, patience, and acceptance from family and the community play a significant role in helping children with special needs live meaningful lives despite the challenges they experience.',
      },
      {
        title: 'What concrete actions you will take to promote inclusion.',
        body: 'I will treat people with special needs with respect, avoid judging them because of their condition, speak up against bullying and discrimination, and encourage others to be more understanding and accepting of everyone.',
      },
    ],
  },
]

function ReflectionJournal({ reflection, index }: { reflection: Reflection; index: number }) {
  return (
    <section
      className={`epf-personal-journal epf-personal-journal--${reflection.tone}`}
      aria-labelledby={`reflection-${reflection.name.toLowerCase()}`}
    >
      <header className="epf-personal-journal-head">
        <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <p>Personal reflection</p>
          <h2 id={`reflection-${reflection.name.toLowerCase()}`}>{reflection.name}</h2>
        </div>
        <i aria-hidden="true" />
      </header>

      <div className="epf-personal-entries">
        {reflection.entries.map((entry, entryIndex) => (
          <article className="epf-personal-entry" key={entry.title}>
            <div className="epf-personal-entry-marker" aria-hidden="true">
              <span>{String(entryIndex + 1).padStart(2, '0')}</span>
            </div>
            <div>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PersonalReflectionPage() {
  return (
    <div className="epf-personal">
      <header className="epf-personal-masthead">
        <div className="epf-personal-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div>
          <p>Three voices after listening</p>
          <h1>Personal Reflection</h1>
        </div>
        <p>
          Your own limitations, biases, or assumptions before the interview. How the interview
          transformed your understanding. What concrete actions you will take to promote inclusion.
        </p>
      </header>

      <nav className="epf-personal-index" aria-label="Personal reflections">
        {reflections.map((reflection) => (
          <a href={`#reflection-${reflection.name.toLowerCase()}`} key={reflection.name}>
            <span className={`epf-personal-index-mark epf-personal-index-mark--${reflection.tone}`} aria-hidden="true" />
            {reflection.name}
          </a>
        ))}
      </nav>

      <div className="epf-personal-journals">
        {reflections.map((reflection, index) => (
          <ReflectionJournal reflection={reflection} index={index} key={reflection.name} />
        ))}
      </div>
    </div>
  )
}
