import { ScrollReveal } from '../ui/ScrollReveal'
import { Shuffle, Brain, Lock, AlertTriangle } from 'lucide-react'

const problems = [
  { icon: Shuffle, title: 'Uso fragmentado', desc: 'Cada persona usa IA a su manera. Los resultados son impredecibles.' },
  { icon: Brain, title: 'Sin memoria', desc: 'Lo que funciona se pierde. Se reinventa la rueda cada dia.' },
  { icon: Lock, title: 'No escala', desc: 'Las buenas practicas quedan aisladas en chats individuales.' },
  { icon: AlertTriangle, title: 'Calidad variable', desc: 'El output depende de la persona, no del proceso.' },
]

export function ProblemSection() {
  return (
    <section id="problema" style={{ padding: 'var(--space-20) var(--space-6)', background: 'var(--color-bg-soft)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-green)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 0, marginBottom: 'var(--space-4)' }}>
              El problema
            </p>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>
              El costo de la IA sin estructura
            </h2>
            <p style={{ maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0 }}>
              Tu equipo ya adopto IA. El desafio es hacerlo con criterio compartido y capacidad de escalar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div style={{
                textAlign: 'center',
                padding: 'var(--space-8) var(--space-5)',
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-light)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
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
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                  <p.icon size={20} color="var(--color-green-dark)" strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>{p.title}</h4>
                <p style={{ fontSize: 'var(--text-sm)', margin: 0, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
