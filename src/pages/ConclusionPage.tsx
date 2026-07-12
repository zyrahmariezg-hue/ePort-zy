import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'

export function ConclusionPage() {
  return (
    <>
      <PageHeader
        title="Conclusion"
        subtitle="[Insert conclusion overview here]"
      />

      <Section title="Overall Summary">
        <PlaceholderBlock
          label="Summary"
          lines={4}
        />
      </Section>

      <Section title="Final Insight">
        <div
          style={{
            padding: 'var(--space-xl)',
            border: '1px solid var(--accent-warm)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--accent-warm-light)',
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--accent-warm)',
              marginBottom: 'var(--space-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Final Insight
          </p>
          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--border-light)',
              marginTop: 'var(--space-md)',
            }}
          />
          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--border-light)',
              marginTop: 'var(--space-md)',
            }}
          />
          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--border-light)',
              marginTop: 'var(--space-md)',
            }}
          />
        </div>
      </Section>

      <Section title="Closing Message">
        <PlaceholderBlock
          label="Closing Message"
          lines={2}
        />
      </Section>
    </>
  )
}
