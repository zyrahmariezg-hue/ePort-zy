export function CoverPage() {
  return (
    <div style={{ minHeight: 'calc(100dvh - var(--nav-height) - 6rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 1.75rem + 3vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: 'var(--ink)',
          }}
        >
          [Insert cover title here]
        </h1>
        <p
          style={{
            marginTop: 'var(--space-lg)',
            fontSize: 'var(--text-xl)',
            color: 'var(--ink-secondary)',
            maxWidth: '40ch',
            margin: 'var(--space-lg) auto 0',
          }}
        >
          [Insert project subtitle here]
        </p>
        <div
          style={{
            marginTop: 'var(--space-2xl)',
            width: '4rem',
            height: '2px',
            backgroundColor: 'var(--accent)',
            margin: 'var(--space-2xl) auto 0',
          }}
          aria-hidden="true"
        />
      </div>

      <div
        style={{
          marginTop: 'var(--space-3xl)',
          maxWidth: '36rem',
          margin: 'var(--space-3xl) auto 0',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              Group Members
            </p>
            <p style={{ color: 'var(--ink-secondary)' }}>[Insert group members here]</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              Grade &amp; Section
            </p>
            <p style={{ color: 'var(--ink-secondary)' }}>[Insert grade and section here]</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              Subject
            </p>
            <p style={{ color: 'var(--ink-secondary)' }}>[Insert subject here]</p>
          </div>
        </div>

        <div
          style={{
            marginTop: 'var(--space-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              Teacher
            </p>
            <p style={{ color: 'var(--ink-secondary)' }}>[Insert teacher name here]</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              Date
            </p>
            <p style={{ color: 'var(--ink-secondary)' }}>[Insert date here]</p>
          </div>
        </div>
      </div>
    </div>
  )
}
