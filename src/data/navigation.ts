export interface NavPage {
  path: string
  label: string
  key: string
  tone: 'blue' | 'green' | 'rose'
}

export const pages: NavPage[] = [
  { path: '/', label: 'Cover Page', key: 'cover', tone: 'blue' },
  { path: '/introduction', label: 'Introduction', key: 'introduction', tone: 'blue' },
  { path: '/community-engagement', label: 'Community Engagement', key: 'engagement', tone: 'green' },
  { path: '/interview-highlights', label: 'Interview Highlights', key: 'interviews', tone: 'green' },
  { path: '/philosophical-reflection', label: 'Philosophical Reflection', key: 'philosophy', tone: 'blue' },
  { path: '/personal-reflection', label: 'Personal Reflection', key: 'personal', tone: 'rose' },
  { path: '/conclusion', label: 'Conclusion', key: 'conclusion', tone: 'rose' },
  { path: '/references', label: 'References', key: 'references', tone: 'blue' },
]
