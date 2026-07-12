import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { CoverPage } from '@/pages/CoverPage'
import { IntroductionPage } from '@/pages/IntroductionPage'
import { CommunityEngagementPage } from '@/pages/CommunityEngagementPage'
import { InterviewHighlightsPage } from '@/pages/InterviewHighlightsPage'
import { PhilosophicalReflectionPage } from '@/pages/PhilosophicalReflectionPage'
import { PersonalReflectionPage } from '@/pages/PersonalReflectionPage'
import { ConclusionPage } from '@/pages/ConclusionPage'
import { ReferencesPage } from '@/pages/ReferencesPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CoverPage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/community-engagement" element={<CommunityEngagementPage />} />
          <Route path="/interview-highlights" element={<InterviewHighlightsPage />} />
          <Route path="/philosophical-reflection" element={<PhilosophicalReflectionPage />} />
          <Route path="/personal-reflection" element={<PersonalReflectionPage />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
          <Route path="/references" element={<ReferencesPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
