import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'
import { Card } from '@/components/ui/Card'

export function InterviewHighlightsPage() {
  return (
    <>
      <PageHeader
        title="Interview Highlights"
        subtitle="[Insert interview highlights overview here]"
      />

      <Section title="Key Questions">
        <PlaceholderBlock
          label="Interview Questions"
          lines={3}
        />
      </Section>

      <Section title="Participant Responses">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-lg)',
            marginTop: 'var(--space-md)',
          }}
        >
          {['Participant 1', 'Participant 2', 'Participant 3'].map((name) => (
            <Card key={name}>
              <p
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {name}
              </p>
              <PlaceholderBlock label={`[Insert ${name}'s response here]`} lines={2} />
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Important Quotations">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {[1, 2].map((i) => (
            <blockquote
              key={i}
              style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: 'var(--space-lg)',
                fontStyle: 'italic',
                color: 'var(--ink-secondary)',
              }}
            >
              <p>[Insert quotation {i} here]</p>
              <footer
                style={{
                  marginTop: 'var(--space-sm)',
                  fontStyle: 'normal',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--ink-muted)',
                }}
              >
                — [Insert speaker {i} here]
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section title="Insight Summaries">
        <PlaceholderBlock
          label="Key Insights"
          lines={3}
        />
      </Section>
    </>
  )
}
