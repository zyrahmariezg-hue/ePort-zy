import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'

export function PersonalReflectionPage() {
  const students = ['Student 1', 'Student 2', 'Student 3']

  return (
    <>
      <PageHeader
        title="Personal Reflection"
        subtitle="[Insert personal reflection overview here]"
      />

      <Section title="Individual Reflections">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)',
            marginTop: 'var(--space-md)',
          }}
        >
          {students.map((name) => (
            <Card key={name} accent={name === 'Student 1' ? 'warm' : 'default'}>
              <p
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {name}
              </p>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <p
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  Learning Insight
                </p>
                <PlaceholderBlock label={`[Insert ${name}'s learning insight here]`} lines={2} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--accent-warm)',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  Personal Realization
                </p>
                <PlaceholderBlock label={`[Insert ${name}'s personal realization here]`} lines={2} />
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
