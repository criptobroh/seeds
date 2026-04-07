import { ScrollReveal } from '../ui/ScrollReveal'
import { CheckCircle2, X } from 'lucide-react'

const without = [
  'Prompts sueltos, no compartidos',
  'Resultados inconsistentes',
  'Sin auditoria ni gobernanza',
  'Conocimiento aislado en personas',
]

const withSkills = [
  'Skills estructurados y compartidos',
  'Output predecible y consistente',
  'Auditoria y gobernanza integrada',
  'Conocimiento que escala con la org',
]

const learning = [
  'Que son los Skills y por que cambian la forma de usar IA',
  'Como crear Skills adaptados a los roles de la organizacion',
  'Como usar Skills en flujos de trabajo reales',
  'Como modificar y versionar Skills existentes',
  'Como auditar Skills para garantizar calidad y seguridad',
]

export function SolutionSection() {
  return (
    <section id="solucion" style={{ padding: 'var(--space-20) var(--space-6)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-green)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 0, marginBottom: 'var(--space-4)' }}>
              La solucion
            </p>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>
              Skills: IA estructurada para cada rol
            </h2>
            <p style={{ maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0 }}>
              Un Skill no es un prompt. Es una definicion completa de como debe operar la IA: auditable, versionable, compartible.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison */}
        <ScrollReveal delay={80}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-12)', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-soft)', border: '1px solid var(--color-border-light)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginTop: 0, marginBottom: 'var(--space-4)' }}>Sin Skills</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {without.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                    <X size={14} color="#ccc" style={{ flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', background: 'var(--color-green-light)', border: '1px solid var(--color-green-muted)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-green-dark)', marginTop: 0, marginBottom: 'var(--space-4)' }}>Con Skills</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {withSkills.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>
                    <CheckCircle2 size={14} color="var(--color-green)" style={{ flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* What they'll learn */}
        <ScrollReveal delay={160}>
          <div style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-soft)', border: '1px solid var(--color-border-light)' }}>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-5)', textAlign: 'center' }}>Que van a aprender</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {learning.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--color-green)" style={{ flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
