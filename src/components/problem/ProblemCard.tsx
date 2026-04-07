import type { Problem } from '../../data/problems'
import { GlassCard } from '../ui/GlassCard'
import { Shuffle, Brain, Lock, AlertTriangle } from 'lucide-react'

const iconMap: Record<string, typeof Shuffle> = {
  Shuffle,
  Brain,
  Lock,
  AlertTriangle,
}

interface ProblemCardProps {
  problem: Problem
}

export function ProblemCard({ problem }: ProblemCardProps) {
  const IconComponent = iconMap[problem.icon]

  return (
    <GlassCard
      accentColor="var(--color-accent-orange)"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255, 107, 53, 0.1)',
          border: '1px solid rgba(255, 107, 53, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {IconComponent && <IconComponent size={22} color="var(--color-accent-orange)" />}
      </div>

      <h4
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-lg)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          lineHeight: 1.3,
        }}
      >
        {problem.title}
      </h4>

      <p
        style={{
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {problem.description}
      </p>
    </GlassCard>
  )
}
