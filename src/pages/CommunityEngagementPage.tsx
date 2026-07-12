import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

export function CommunityEngagementPage() {
  return (
    <>
      <PageHeader
        title="Community Engagement"
        subtitle="[Insert community engagement overview here]"
      />

      <Section title="Activity Description">
        <PlaceholderBlock
          label="Activity Description"
          lines={4}
        />
      </Section>

      <Section title="Participants &amp; Community Context">
        <PlaceholderBlock
          label="Community Context"
          lines={3}
        />
      </Section>

      <Section title="Documentation">
        <PlaceholderBlock
          label="Documentation Notes"
          lines={3}
        />
        <div
          style={{
            marginTop: 'var(--space-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          <ImagePlaceholder label="Documentation Photo Placeholder" />
          <ImagePlaceholder label="Group Photo Placeholder" />
        </div>
      </Section>
    </>
  )
}
