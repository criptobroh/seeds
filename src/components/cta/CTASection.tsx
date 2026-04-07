import { ScrollReveal } from '../ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contacto" style={{ padding: 'var(--space-24) var(--space-6)' }}>
      <div style={{ maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>
            El siguiente paso es una conversacion
          </h2>
          <p style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
            30 minutos para entender donde esta tu equipo y definir juntos el mejor camino.
          </p>

          <div style={{ marginTop: 'var(--space-10)' }}>
            <a
              href="mailto:pablo@nocoda.ai"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: '14px 32px',
                background: 'var(--color-green)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 'var(--text-sm)',
                borderRadius: '100px',
                textDecoration: 'none',
                transition: 'all var(--transition-normal)',
                boxShadow: '0 2px 8px rgba(0,179,125,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-green-dark)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,179,125,0.3)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-green)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,179,125,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Agendar conversacion
              <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-6)' }}>
            <span>pablo@nocoda.ai</span>
            <span>+54 9 11 3350 1462</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
