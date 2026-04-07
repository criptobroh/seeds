import { useEffect, useState } from 'react'

export function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 200) }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-24) var(--space-6) var(--space-16)',
      }}
    >
      <div style={{
        maxWidth: '620px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'all 0.7s ease',
      }}>
        {/* Logos */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-10)' }}>
          <img src="/logo-seeds.svg" alt="Seeds" style={{ height: '24px' }} />
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 500, letterSpacing: '0.05em' }}>x</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img src="/logo-nocoda.png" alt="NoCoda" style={{ width: '22px', height: '22px', borderRadius: '5px' }} />
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)' }}>NoCoda</span>
          </div>
        </div>

        <h1 style={{ marginBottom: 'var(--space-5)' }}>
          Capacitacion en<br />
          <span style={{ color: 'var(--color-green)' }}>IA estructurada</span><br />
          para tu equipo
        </h1>

        <p style={{ fontSize: 'var(--text-lg)', maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 'var(--space-10)' }}>
          Un programa practico para que tu equipo aprenda a crear, usar
          y gobernar agentes de IA a nivel organizacional.
        </p>

        <a
          href="#metodologia"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: '14px 32px',
            background: 'var(--color-green)',
            color: '#fff',
            fontWeight: 600,
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
          Ver metodologia
        </a>
      </div>
    </section>
  )
}
