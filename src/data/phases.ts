export interface Phase {
  id: number
  name: string
  title: string
  description: string
  roles: string[]
  duration: string
  color: string
}

export const phases: Phase[] = [
  {
    id: 1,
    name: 'Fase 1',
    title: 'Piloto',
    description: 'Un grupo reducido de referentes adopta los primeros skills y los valida con proyectos reales. Se establece la baseline de calidad y los criterios de evaluacion.',
    roles: ['Referentes estrategicos', 'Early adopters'],
    duration: 'Semanas 1-3',
    color: 'var(--color-accent-cyan)',
  },
  {
    id: 2,
    name: 'Fase 2',
    title: 'Expansion',
    description: 'Los skills validados se extienden a mas roles. Se crea una biblioteca compartida de skills y se establecen flujos de trabajo estandarizados.',
    roles: ['Equipos operativos', 'Nuevos roles'],
    duration: 'Semanas 4-8',
    color: 'var(--color-accent-purple)',
  },
  {
    id: 3,
    name: 'Fase 3',
    title: 'Institucionalizacion',
    description: 'Adopcion a nivel organizacional con auditoria continua, gobernanza establecida y capacidad de crear nuevos skills de forma autonoma.',
    roles: ['Toda la organizacion', 'Liderazgo'],
    duration: 'Semanas 9-12',
    color: 'var(--color-accent-green)',
  },
]
