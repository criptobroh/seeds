import type { Skill } from '../../data/skills'
import { categoryColors, categoryLabels } from '../../data/skills'
import {
  Palette, Layout, Search, Paintbrush, Code2, Server,
  PenTool, TrendingUp, Globe, Shield, Eye,
} from 'lucide-react'

const iconMap: Record<string, typeof Palette> = {
  Palette, Layout, Search, Figma: Paintbrush, Code2, Server,
  PenTool, TrendingUp, Globe, Shield, Eye,
}

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const color = categoryColors[skill.category]
  const label = categoryLabels[skill.category]
  const IconComponent = iconMap[skill.icon]

  return (
    <div
      style={{
        background: 'var(--color-glass-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${color}20`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        transition: 'all var(--transition-normal)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px) scale(1.02)'
        el.style.borderColor = `${color}50`
        el.style.boxShadow = `0 0 30px ${color}20`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0) scale(1)'
        el.style.borderColor = `${color}20`
        el.style.boxShadow = 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: `${color}12`,
            border: `1px solid ${color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {IconComponent && <IconComponent size={18} color={color} />}
        </div>
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-base)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {skill.displayName}
          </h4>
        </div>
      </div>

      <span
        style={{
          display: 'inline-block',
          width: 'fit-content',
          fontSize: 'var(--text-xs)',
          fontFamily: 'var(--font-mono)',
          color: color,
          background: `${color}10`,
          padding: '2px 8px',
          borderRadius: '100px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </span>

      <p
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {skill.description}
      </p>
    </div>
  )
}
