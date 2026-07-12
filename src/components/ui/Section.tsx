import type { ReactNode } from 'react'

interface SectionProps {
  title?: string
  children: ReactNode
  variant?: 'default' | 'alt'
}

export function Section({ title, children, variant = 'default' }: SectionProps) {
  return (
    <section
      style={{
        padding: 'var(--space-2xl) 0',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: 'var(--text-2xl)',
            marginBottom: 'var(--space-lg)',
            color: 'var(--ink)',
          }}
        >
          {title}
        </h3>
      )}
      <div
        style={{
          backgroundColor: variant === 'alt' ? 'var(--surface-alt)' : 'transparent',
          padding: variant === 'alt' ? 'var(--space-xl)' : '0',
          borderRadius: variant === 'alt' ? 'var(--radius-md)' : '0',
        }}
      >
        {children}
      </div>
    </section>
  )
}
