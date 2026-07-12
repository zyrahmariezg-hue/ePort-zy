interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header style={{ marginBottom: 'var(--space-3xl)' }}>
      <h1>{title}</h1>
      {subtitle && (
        <p
          style={{
            marginTop: 'var(--space-md)',
            fontSize: 'var(--text-lg)',
            color: 'var(--ink-secondary)',
            maxWidth: '55ch',
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          marginTop: 'var(--space-lg)',
          width: '3rem',
          height: '2px',
          backgroundColor: 'var(--accent)',
        }}
        aria-hidden="true"
      />
    </header>
  )
}
