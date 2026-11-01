type DecorPanelProps = {
  variant?: 1 | 2 | 3 | 4 | 5
  className?: string
  label?: string
  rounded?: boolean
  /** Real photo to render instead of the gradient placeholder. When omitted,
   * this stays a CSS-only mood-board panel -- see CLAUDE.md: this demo
   * ships without licensed photography yet, so every slot currently uses
   * this fallback. */
  src?: string
  alt?: string
}

// Tasteful CSS-only mood-board panels, standing in for real photography
// until licensed photos are sourced for this vertical (see CLAUDE.md).
const variants: Record<number, string> = {
  1: 'bg-[linear-gradient(160deg,var(--color-bone)_0%,var(--color-stone)_140%)]',
  2: 'bg-[linear-gradient(155deg,var(--color-char)_0%,var(--color-char-deep)_100%)]',
  3: 'bg-[radial-gradient(circle_at_30%_25%,var(--color-paper),var(--color-slate)_150%)]',
  4: 'bg-[linear-gradient(135deg,var(--color-clay)_0%,var(--color-char)_140%)]',
  5: 'bg-[radial-gradient(circle_at_70%_30%,var(--color-bone),var(--color-stone-deep)_160%)]',
}

export default function DecorPanel({ variant = 1, className = '', label, rounded = true, src, alt }: DecorPanelProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded ? 'rounded-2xl' : ''} ${className}`}>
        <img src={src} alt={alt ?? ''} loading="lazy" className="h-full w-full object-cover" />
        {label && (
          <span className="absolute bottom-3 left-3 rounded-full bg-black/25 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {label}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-2xl' : ''} ${variants[variant]} ${className}`}>
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay [background-image:repeating-linear-gradient(45deg,#000_0,#000_1px,transparent_1px,transparent_10px)]" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-black/25 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  )
}
