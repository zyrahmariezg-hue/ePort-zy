interface VoiceMarkProps {
  className?: string
}

/**
 * The cover's signature identity mark: three nested "listening ripples" in the
 * three voice colors — green, blue, rose — radiating from a single point.
 * A quiet visual argument for the whole project: three students listening to
 * voices that are often overlooked. Purely decorative, so hidden from AT.
 */
export function VoiceMark({ className }: VoiceMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M44 86 A30 30 0 0 0 14 56"
        stroke="var(--accent-green)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M58 86 A44 44 0 0 0 14 42"
        stroke="var(--accent)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M72 86 A58 58 0 0 0 14 28"
        stroke="var(--accent-warm)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="14" cy="86" r="4.5" fill="var(--ink)" />
    </svg>
  )
}
