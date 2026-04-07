import type { ReactNode, CSSProperties, ElementType } from 'react'

interface GradientTextProps {
  children: ReactNode
  from?: string
  to?: string
  as?: ElementType
  className?: string
  style?: CSSProperties
}

export function GradientText({
  children,
  from = 'var(--color-accent-cyan)',
  to = 'var(--color-accent-purple)',
  as: Tag = 'span',
  className = '',
  style,
}: GradientTextProps) {
  return (
    <Tag
      className={className}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
