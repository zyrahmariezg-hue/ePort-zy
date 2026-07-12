export const siteMeta = {
  wordmark: 'ePortfolio',
  title: 'The Lived Experiences of Persons with Disabilities',
  subtitle: 'A Philosophical Reflection',
}

// Cover-page content. Values sourced from docs/all-info.md (and the documented
// group name from PRODUCT.md). Fields not present are kept as clear placeholders.
export const coverMeta = {
  group: 'PETA',
  kicker: 'Interview Portfolio',
  title: 'The Lived Experiences of Persons with Disabilities',
  subtitle: 'A Philosophical Reflection',
  theme:
    'Genuine understanding begins by listening to the voices of those whose experiences are often overlooked.',
  members: [
    'Zyrah Mariez P. Grandeza',
    'Zhaina Jhazelle M. Morden',
    'Daniel Bowen N. Mutuc',
  ],
  subject: 'Philosophy',
  gradeSection: '12–Kelvin',
  teacher: 'Kevin John Elchico',
  date: 'July 14, 2026',
  schoolYear: '2026–2027',
  // The three movements of the portfolio, each bound to its chapter color
  // (community → green, philosophical → blue, personal → rose). Notes are
  // faithful to docs/all-info.md — no invented facts.
  movements: [
    {
      tone: 'green',
      index: '01',
      title: 'Community Engagement',
      note: 'Two families, interviewed at home in Tagumpay, Rodriguez, Rizal.',
    },
    {
      tone: 'blue',
      index: '02',
      title: 'Philosophical Reflection',
      note: 'What their stories reveal about dignity, empathy, and being human.',
    },
    {
      tone: 'rose',
      index: '03',
      title: 'Personal Reflection',
      note: 'Our own assumptions — and what changed once we listened.',
    },
  ],
} as const
