import type { Session } from '../../data/sessions'
import { CheckCircle2 } from 'lucide-react'

interface SessionCardProps {
  session: Session
}

const accentColors = ['var(--color-accent-cyan)', 'var(--color-accent-purple)', 'var(--color-accent-green)']

export function SessionCard({ session }: SessionCardProps) {
  const color = accentColors[session.id - 1]

  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--color-glass-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${color}25`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        transition: 'all var(--transition-normal)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}50`
        e.currentTarget.style.boxShadow = `0 0 40px ${color}15`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}25`
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Session number */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: `${color}15`,
            border: `2px solid ${color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'var(--text-xl)',
            color: color,
            flexShrink: 0,
          }}
        >
          {session.id}
        </div>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {session.title}
          </h3>
          <span
            style={{
              fontSize: 'var(--text-sm)',
              color: color,
              fontFamily: 'var(--font-mono)',
            }}
          >
            {session.subtitle}
          </span>
        </div>
      </div>

      <p
        style={{
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {session.description}
      </p>

      {/* Topics */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        {session.topics.map((topic) => (
          <div
            key={topic}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
            }}
          >
            <CheckCircle2 size={16} color={color} style={{ flexShrink: 0, marginTop: '2px' }} />
            {topic}
          </div>
        ))}
      </div>

      {/* Outcome */}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Resultado
        </span>
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: color,
            margin: 'var(--space-2) 0 0 0',
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          {session.outcome}
        </p>
      </div>
    </div>
  )
}
