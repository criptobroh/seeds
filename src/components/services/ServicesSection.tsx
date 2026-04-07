import { ScrollReveal } from '../ui/ScrollReveal'
import { Database, Activity } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'Knowledge Base (RAG)',
    desc: 'Los skills acceden a documentacion interna: manuales, procesos, guias. IA con el contexto de tu organizacion.',
  },
  {
    icon: Activity,
    title: 'Plataforma de Auditoria',
    desc: 'Auditoria y gobernanza de skills a escala. Monitoreo continuo cuando la base este consolidada.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" style={{ padding: 'var(--space-16) var(--space-6)', background: 'var(--color-bg-soft)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 0, marginBottom: 'var(--space-4)' }}>
              Servicios opcionales
            </p>
            <h3 style={{ fontSize: 'var(--text-xl)' }}>Capacidades disponibles cuando esten listos</h3>
          </div>
        </ScrollReveal>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg)', border: '1px solid var(--color-border-light)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-bg-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.icon size={18} color="var(--color-text-muted)" strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, margin: 0 }}>{s.title}</h4>
                <p style={{ fontSize: 'var(--text-sm)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
