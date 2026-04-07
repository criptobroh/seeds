import type { ReactNode, CSSProperties } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  style?: CSSProperties
  noPadding?: boolean
}

export function Section({ id, children, className = '', style, noPadding }: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        width: '100%',
        maxWidth: 'var(--max-width)',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: noPadding ? '0' : 'var(--space-24) var(--space-6)',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </section>
  )
}
