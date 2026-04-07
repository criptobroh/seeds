import { ScrollReveal } from '../ui/ScrollReveal'
import { CheckCircle2, XCircle } from 'lucide-react'

const comparison = [
  { without: 'Prompts sueltos y no compartidos', withS: 'Skills compartidos entre el equipo' },
  { without: 'Resultados inconsistentes', withS: 'Output predecible y consistente' },
  { without: 'Sin auditoria ni gobernanza', withS: 'Auditoria y gobernanza integrada' },
  { without: 'Conocimiento aislado en personas', withS: 'Conocimiento institucional escalable' },
]

const learning = [
  'Que son los Skills y como cambian el uso de IA',
  'Como crear Skills para cada rol del equipo',
  'Como usarlos en flujos de trabajo reales',
  'Como modificar y versionar Skills',
  'Como auditarlos para garantizar calidad',
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

        {/* Comparison table */}
        <ScrollReveal delay={80}>
          <div style={{ maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'var(--space-12)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: 'var(--space-4) var(--space-6)', background: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-border-light)', borderRight: '1px solid var(--color-border-light)' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', margin: 0 }}>Sin Skills</p>
              </div>
              <div style={{ padding: 'var(--space-4) var(--space-6)', background: 'var(--color-green-light)', borderBottom: '1px solid var(--color-green-muted)' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-green-dark)', margin: 0 }}>Con Skills</p>
              </div>
            </div>
            {/* Rows */}
            {comparison.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i < comparison.length - 1 ? '1px solid var(--color-border-light)' : 'none' }}>
                <div style={{ padding: 'var(--space-3) var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', borderRight: '1px solid var(--color-border-light)' }}>
                  <XCircle size={14} color="#ccc" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{row.without}</span>
                </div>
                <div style={{ padding: 'var(--space-3) var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', background: 'rgba(234,248,242,0.5)' }}>
                  <CheckCircle2 size={14} color="var(--color-green)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text)', fontWeight: 500 }}>{row.withS}</span>
                </div>
              </div>
            ))}
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
