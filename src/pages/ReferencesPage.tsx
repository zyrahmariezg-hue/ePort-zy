import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'

export function ReferencesPage() {
  return (
    <>
      <PageHeader
        title="References"
        subtitle="[Insert references overview here]"
      />

      <Section title="Interviews">
        <PlaceholderBlock
          label="Interview Sources"
          lines={3}
        />
      </Section>

      <Section title="Documents">
        <PlaceholderBlock
          label="Document Sources"
          lines={3}
        />
      </Section>

      <Section title="Academic Sources">
        <PlaceholderBlock
          label="Academic Sources"
          lines={4}
        />
      </Section>

      <Section title="Online Sources">
        <PlaceholderBlock
          label="Online Sources"
          lines={3}
        />
      </Section>
    </>
  )
}
