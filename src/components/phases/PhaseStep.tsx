import type { Phase } from '../../data/phases'

interface PhaseStepProps {
  phase: Phase
  isLast: boolean
}

export function PhaseStep({ phase, isLast }: PhaseStepProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-6)',
        position: 'relative',
      }}
    >
      {/* Timeline */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: `${phase.color}15`,
            border: `2px solid ${phase.color}50`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'var(--text-base)',
            color: phase.color,
            zIndex: 1,
          }}
        >
          {phase.id}
        </div>
        {!isLast && (
          <div
            style={{
              width: '2px',
              flex: 1,
              background: `linear-gradient(to bottom, ${phase.color}40, ${phase.color}10)`,
              marginTop: 'var(--space-2)',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          paddingBottom: isLast ? 0 : 'var(--space-12)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
          <span
            style={{
              fontSize: 'var(--text-xs)',
              fontFamily: 'var(--font-mono)',
              color: phase.color,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {phase.name}
          </span>
          <span
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {phase.duration}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {phase.title}
        </h3>

        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            margin: '0 0 var(--space-4) 0',
            maxWidth: '550px',
          }}
        >
          {phase.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {phase.roles.map((role) => (
            <span
              key={role}
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                color: phase.color,
                background: `${phase.color}10`,
                border: `1px solid ${phase.color}20`,
                padding: '2px 10px',
                borderRadius: '100px',
              }}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
