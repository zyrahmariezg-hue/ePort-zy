export interface NavPage {
  path: string
  label: string
  key: string
}

export const pages: NavPage[] = [
  { path: '/', label: 'Cover Page', key: 'cover' },
  { path: '/introduction', label: 'Introduction', key: 'introduction' },
  { path: '/community-engagement', label: 'Community Engagement', key: 'engagement' },
  { path: '/interview-highlights', label: 'Interview Highlights', key: 'interviews' },
  { path: '/philosophical-reflection', label: 'Philosophical Reflection', key: 'philosophy' },
  { path: '/personal-reflection', label: 'Personal Reflection', key: 'personal' },
  { path: '/conclusion', label: 'Conclusion', key: 'conclusion' },
  { path: '/references', label: 'References', key: 'references' },
]
