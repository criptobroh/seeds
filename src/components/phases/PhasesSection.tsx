import { ScrollReveal } from '../ui/ScrollReveal'

const phases = [
  { num: 1, title: 'Piloto', desc: 'Grupo reducido valida los primeros skills con proyectos reales.', roles: ['Referentes estrategicos'], time: 'Sem 1-3' },
  { num: 2, title: 'Expansion', desc: 'Skills validados se extienden. Se crea biblioteca compartida.', roles: ['Equipos operativos'], time: 'Sem 4-8' },
  { num: 3, title: 'Institucionalizacion', desc: 'Adopcion org-wide con auditoria y gobernanza establecida.', roles: ['Toda la organizacion'], time: 'Sem 9-12' },
]

export function PhasesSection() {
  return (
    <section id="fases" style={{ padding: 'var(--space-20) var(--space-6)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-green)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 0, marginBottom: 'var(--space-4)' }}>
              Implementacion
            </p>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>Rollout por fases</h2>
            <p style={{ maxWidth: '380px', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0 }}>
              Cada fase se valida antes de escalar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.num} delay={i * 80}>
              <div style={{
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-bg-soft)',
                border: '1px solid var(--color-border-light)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px', color: 'var(--color-green-dark)', flexShrink: 0 }}>
                    {phase.num}
                  </div>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, margin: 0, flex: 1 }}>{phase.title}</h4>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 500 }}>{phase.time}</span>
                </div>
                <p style={{ fontSize: 'var(--text-sm)', marginTop: 0, marginBottom: 'var(--space-4)', marginLeft: 0, marginRight: 0, lineHeight: 1.6, flex: 1 }}>{phase.desc}</p>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  {phase.roles.map((r) => (
                    <span key={r} style={{ fontSize: '11px', color: 'var(--color-green-dark)', background: 'var(--color-green-light)', padding: '3px 12px', borderRadius: '100px', fontWeight: 600 }}>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
