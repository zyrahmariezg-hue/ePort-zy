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

      <Section title="Community Impact">
        <div
          style={{
            padding: 'var(--space-xl)',
            border: '1px solid var(--accent-green)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--accent-green-light)',
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--accent-green)',
              marginBottom: 'var(--space-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Community Impact
          </p>
          <PlaceholderBlock label="[Insert what changed for the community, in the group's own words]" lines={3} />
        </div>
      </Section>
    </>
  )
}
