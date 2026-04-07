export interface Session {
  id: number
  title: string
  subtitle: string
  description: string
  topics: string[]
  outcome: string
}

export const sessions: Session[] = [
  {
    id: 1,
    title: 'Fundamentos',
    subtitle: 'Entender para operar',
    description: 'Setup del entorno, comprension del modelo y primeras interacciones productivas. Introduccion al concepto de Skills como unidad de trabajo estructurado.',
    topics: [
      'Setup de Claude Desktop',
      'Como funciona el modelo y sus capacidades',
      'Primeras interacciones productivas',
      'Que es un Skill y por que cambia todo',
    ],
    outcome: 'Cada participante sale con Claude Desktop operativo y su primer skill funcional.',
  },
  {
    id: 2,
    title: 'Skills en Accion',
    subtitle: 'Crear, usar, iterar',
    description: 'Creacion de skills desde cero aplicados a casos reales del equipo. Modificacion, iteracion y colaboracion entre participantes.',
    topics: [
      'Anatomia de un skill: estructura y componentes',
      'Crear skills desde cero para casos reales',
      'Modificar y versionar skills existentes',
      'Compartir skills entre el equipo',
    ],
    outcome: 'El equipo tiene un set de skills funcionales aplicados a sus procesos reales.',
  },
  {
    id: 3,
    title: 'Escalamiento y Gobernanza',
    subtitle: 'De lo individual a lo organizacional',
    description: 'Estrategia de rollout por roles, auditoria de skills, framework de gobernanza para adopcion sostenible a nivel organizacional.',
    topics: [
      'Auditar skills: calidad, seguridad, consistencia',
      'Estrategia de rollout por roles y fases',
      'Best practices organizacionales',
      'Framework de gobernanza de skills',
    ],
    outcome: 'Seeds tiene un plan de accion concreto para escalar la adopcion de forma gobernada.',
  },
]
