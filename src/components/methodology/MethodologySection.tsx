import { ScrollReveal } from '../ui/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

const sessions = [
  {
    num: 1,
    title: 'Fundamentos',
    topics: ['Setup de Claude Desktop', 'Como funciona el modelo', 'Que es un Skill y por que importa'],
    outcome: 'Claude operativo + primer skill funcional.',
  },
  {
    num: 2,
    title: 'Skills en Accion',
    topics: ['Crear skills desde cero', 'Usar skills en workflows reales', 'Modificar y compartir skills'],
    outcome: 'Set de skills aplicados a procesos reales.',
  },
  {
    num: 3,
    title: 'Escalamiento',
    topics: ['Auditar skills', 'Rollout por roles y fases', 'Framework de gobernanza'],
    outcome: 'Plan de accion para escalar la adopcion.',
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" style={{ padding: 'var(--space-20) var(--space-6)', background: 'var(--color-bg-soft)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-green)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 0, marginBottom: 'var(--space-4)' }}>
              Metodologia
            </p>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>3 sesiones. Resultados reales.</h2>
            <p style={{ maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0 }}>
              Practica con casos reales. Modalidad flexible: online o presencial.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
          {sessions.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 80}>
              <div style={{
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border-light)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow var(--transition-normal), transform var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px', color: '#fff', flexShrink: 0 }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, margin: 0 }}>{s.title}</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: 'var(--space-5)' }}>
                  {s.topics.map((t) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={14} color="var(--color-green)" style={{ flexShrink: 0 }} />
                      {t}
                    </div>
                  ))}
                </div>

                <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border-light)' }}>
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-green-dark)', margin: 0 }}>
                    {s.outcome}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
