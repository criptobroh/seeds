import type { ReactNode, CSSProperties } from 'react'

interface GlassCardProps {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'bordered'
  accentColor?: string
  className?: string
  style?: CSSProperties
  hover?: boolean
}

export function GlassCard({
  children,
  variant = 'default',
  accentColor,
  className = '',
  style,
  hover = true,
}: GlassCardProps) {
  const variantClass =
    variant === 'elevated' ? 'glass-elevated' :
    variant === 'bordered' ? 'glass-bordered' :
    'glass'

  return (
    <div
      className={`${variantClass} ${className}`}
      style={{
        padding: 'var(--space-8)',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
        cursor: hover ? 'default' : undefined,
        ...(accentColor ? {
          borderColor: accentColor,
          boxShadow: `0 0 20px ${accentColor}15`,
        } : {}),
        ...style,
      }}
      onMouseEnter={hover ? (e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px)'
        if (accentColor) {
          el.style.boxShadow = `0 0 30px ${accentColor}30`
        }
      } : undefined}
      onMouseLeave={hover ? (e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        if (accentColor) {
          el.style.boxShadow = `0 0 20px ${accentColor}15`
        }
      } : undefined}
    >
      {children}
    </div>
  )
}
