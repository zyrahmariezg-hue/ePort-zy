import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'

export function PhilosophicalReflectionPage() {
  return (
    <>
      <PageHeader
        title="Philosophical Reflection"
        subtitle="[Insert philosophical reflection overview here]"
      />

      <Section title="Main Philosophical Idea">
        <PlaceholderBlock
          label="Philosophical Concept"
          lines={4}
        />
      </Section>

      <Section title="Connection to the Project">
        <PlaceholderBlock
          label="Project Connection"
          lines={3}
        />
      </Section>

      <Section title="Analysis">
        <PlaceholderBlock
          label="Analysis"
          lines={5}
        />
      </Section>

      <Section title="Key Realization">
        <div
          style={{
            padding: 'var(--space-xl)',
            border: '1px solid var(--accent)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--accent-light)',
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--accent)',
              marginBottom: 'var(--space-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Key Realization
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
        </div>
      </Section>
    </>
  )
}
