import { useScrollProgress } from '../../hooks/useScrollProgress'

const navLinks = [
  { href: '#problema', label: 'Problema' },
  { href: '#solucion', label: 'Solucion' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#fases', label: 'Fases' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const { scrolled } = useScrollProgress()

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all var(--transition-normal)',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--color-border-light)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 'var(--space-3) var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
          <img
            src="/logo-nocoda.png"
            alt="NoCoda"
            style={{ width: '36px', height: '36px', borderRadius: '8px' }}
          />
          <span style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)' }}>
            NoCoda
          </span>
        </a>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-green)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
