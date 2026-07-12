interface PlaceholderBlockProps {
  label: string
  lines?: number
}

export function PlaceholderBlock({ label, lines = 3 }: PlaceholderBlockProps) {
  return (
    <div
      style={{
        padding: 'var(--space-lg)',
        border: '1px dashed var(--border)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--surface)',
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
        {label}
      </p>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          style={{
            height: '1px',
            backgroundColor: 'var(--border-light)',
            marginTop: 'var(--space-md)',
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
