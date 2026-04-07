export interface Skill {
  id: string
  name: string
  displayName: string
  description: string
  category: 'design' | 'development' | 'strategy' | 'quality'
  icon: string
}

export const categoryColors: Record<string, string> = {
  design: 'var(--color-accent-cyan)',
  development: 'var(--color-accent-purple)',
  strategy: 'var(--color-accent-green)',
  quality: 'var(--color-accent-pink)',
}

export const categoryLabels: Record<string, string> = {
  design: 'Diseno',
  development: 'Desarrollo',
  strategy: 'Estrategia',
  quality: 'Calidad',
}

export const skills: Skill[] = [
  {
    id: 'ui-designer',
    name: 'ui-designer',
    displayName: 'UI Designer',
    description: 'Sistemas de diseno, librerias de componentes e interfaces pixel-perfect con accesibilidad integrada.',
    category: 'design',
    icon: 'Palette',
  },
  {
    id: 'ux-architect',
    name: 'ux-architect',
    displayName: 'UX Architect',
    description: 'Arquitectura de informacion, sistemas CSS, frameworks de layout y fundamentos tecnicos de experiencia de usuario.',
    category: 'design',
    icon: 'Layout',
  },
  {
    id: 'ux-researcher',
    name: 'ux-researcher',
    displayName: 'UX Researcher',
    description: 'Investigacion de usuario, testing de usabilidad, analisis de comportamiento y generacion de insights accionables.',
    category: 'design',
    icon: 'Search',
  },
  {
    id: 'frontend-design',
    name: 'frontend-design',
    displayName: 'Frontend Design',
    description: 'Interfaces production-grade con alta calidad de diseno, direccion estetica distintiva y excelencia en CSS.',
    category: 'design',
    icon: 'Figma',
  },
  {
    id: 'frontend-developer',
    name: 'frontend-developer',
    displayName: 'Frontend Developer',
    description: 'React, Vue, Angular. Optimizacion de performance, accesibilidad y Core Web Vitals.',
    category: 'development',
    icon: 'Code2',
  },
  {
    id: 'backend-architect',
    name: 'backend-architect',
    displayName: 'Backend Architect',
    description: 'Arquitectura de servidor, diseno de bases de datos, APIs, microservicios e infraestructura cloud.',
    category: 'development',
    icon: 'Server',
  },
  {
    id: 'content-creator',
    name: 'content-creator',
    displayName: 'Content Creator',
    description: 'Estrategia de contenido, creacion multiplataforma, storytelling de marca y contenido SEO.',
    category: 'strategy',
    icon: 'PenTool',
  },
  {
    id: 'growth-hacker',
    name: 'growth-hacker',
    displayName: 'Growth Hacker',
    description: 'Adquisicion de usuarios, experimentacion, viral loops y optimizacion de conversion.',
    category: 'strategy',
    icon: 'TrendingUp',
  },
  {
    id: 'seo-specialist',
    name: 'seo-specialist',
    displayName: 'SEO Specialist',
    description: 'SEO tecnico, optimizacion de contenido, autoridad de enlaces y SERP features.',
    category: 'strategy',
    icon: 'Globe',
  },
  {
    id: 'brand-guardian',
    name: 'brand-guardian',
    displayName: 'Brand Guardian',
    description: 'Consistencia de marca, gestion de identidad, enforcement de lineamientos visuales y voz.',
    category: 'strategy',
    icon: 'Shield',
  },
  {
    id: 'accessibility-auditor',
    name: 'accessibility-auditor',
    displayName: 'Accessibility Auditor',
    description: 'Compliance de accesibilidad web, standards WCAG, auditoria automatizada y testing inclusivo.',
    category: 'quality',
    icon: 'Eye',
  },
]
