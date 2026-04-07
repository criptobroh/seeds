export function Footer() {
  return (
    <footer style={{ padding: 'var(--space-8) var(--space-6)', textAlign: 'center', borderTop: '1px solid var(--color-border-light)' }}>
      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
        Propuesta confidencial preparada para Seeds &middot; NoCoda {new Date().getFullYear()}
      </p>
    </footer>
  )
}
