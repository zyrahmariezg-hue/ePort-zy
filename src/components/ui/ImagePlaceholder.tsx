import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  label: string
  aspectRatio?: string
}

export function ImagePlaceholder({ label, aspectRatio = '16/9' }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{
        aspectRatio,
        border: '1px dashed var(--border)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--surface-alt)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-sm)',
        padding: 'var(--space-lg)',
      }}
    >
      <ImageIcon size={32} style={{ color: 'var(--ink-muted)' }} />
      <span
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: 'var(--text-sm)',
          color: 'var(--ink-muted)',
          textAlign: 'center',
        }}
      >
        {label}
      </span>
    </div>
  )
}
