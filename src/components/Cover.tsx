type Variant = 'form' | 'fold' | 'hall'

export function Cover({ variant, title }: { variant: Variant; title?: string }) {
  return (
    <div className="cover-art" data-variant={variant} aria-hidden="true">
      {variant === 'form' && <FormArt />}
      {variant === 'fold' && <FoldArt />}
      {variant === 'hall' && <HallArt />}
      {title ? <span className="title">{title}</span> : null}
    </div>
  )
}

function FormArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="500" fill="#0c0c0c" />
      <circle cx="200" cy="230" r="168" fill="none" stroke="#f3f1eb" strokeWidth="1" opacity="0.25" />
      <circle cx="200" cy="230" r="126" fill="none" stroke="#f3f1eb" strokeWidth="1" opacity="0.45" />
      <circle cx="200" cy="230" r="84" fill="none" stroke="#f3f1eb" strokeWidth="1.5" />
      <circle cx="200" cy="230" r="28" fill="#f3f1eb" />
      <text
        x="200"
        y="236"
        textAnchor="middle"
        fill="#0c0c0c"
        fontFamily="Georgia, serif"
        fontSize="11"
        letterSpacing="2"
      >
        REST
      </text>
    </svg>
  )
}

function FoldArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="500" fill="#0c0c0c" />
      <g fill="#f3f1eb">
        <rect x="70" y="90" width="210" height="280" opacity="0.18" />
        <rect x="95" y="115" width="210" height="280" opacity="0.35" />
        <rect x="120" y="140" width="210" height="280" />
      </g>
      <g stroke="#0c0c0c" strokeWidth="1" opacity="0.35">
        <line x1="140" y1="190" x2="310" y2="190" />
        <line x1="140" y1="220" x2="300" y2="220" />
        <line x1="140" y1="250" x2="290" y2="250" />
        <line x1="140" y1="280" x2="270" y2="280" />
      </g>
    </svg>
  )
}

function HallArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="500" fill="#0c0c0c" />
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 46 + col * 110
        const y = 70 + row * 92
        const filled = i === 4
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="96"
              height="72"
              fill={filled ? '#f3f1eb' : 'none'}
              stroke="#f3f1eb"
              strokeWidth="1"
              opacity={filled ? 1 : 0.55}
            />
            <text
              x={x + 48}
              y={y + 42}
              textAnchor="middle"
              fill={filled ? '#0c0c0c' : '#f3f1eb'}
              fontFamily="Georgia, serif"
              fontSize="13"
            >
              {filled ? 'IN' : '—'}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
