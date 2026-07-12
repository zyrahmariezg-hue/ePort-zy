import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  accent?: 'default' | 'warm'
}

export function Card({ children, accent = 'default' }: CardProps) {
  const borderColor = accent === 'warm' ? 'var(--accent-warm)' : 'var(--border)'

  return (
    <div
      style={{
        padding: 'var(--space-xl)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--surface)',
      }}
    >
      {children}
    </div>
  )
}
