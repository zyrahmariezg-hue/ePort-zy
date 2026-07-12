import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'

export function IntroductionPage() {
  return (
    <>
      <PageHeader
        title="Introduction"
        subtitle="[Insert introduction overview here]"
      />

      <Section title="Background of the Project">
        <PlaceholderBlock
          label="Project Background"
          lines={4}
        />
      </Section>

      <Section title="Purpose of the ePortfolio">
        <PlaceholderBlock
          label="ePortfolio Purpose"
          lines={3}
        />
      </Section>

      <Section title="Topic Overview">
        <PlaceholderBlock
          label="Topic Overview"
          lines={4}
        />
      </Section>
    </>
  )
}
