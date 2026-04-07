export interface Problem {
  id: string
  title: string
  description: string
  icon: string
}

export const problems: Problem[] = [
  {
    id: 'inconsistency',
    title: 'Cada persona usa IA a su manera',
    description: 'Sin criterio compartido, cada integrante del equipo obtiene resultados diferentes para el mismo tipo de tarea. La calidad es impredecible y depende enteramente de quien opera la herramienta.',
    icon: 'Shuffle',
  },
  {
    id: 'no-memory',
    title: 'Los prompts se pierden, se repiten, no se auditan',
    description: 'No hay memoria institucional. Lo que funciona para uno no llega al resto. Cada persona reinventa la rueda todos los dias, desperdiciando horas de trabajo acumulado.',
    icon: 'Brain',
  },
  {
    id: 'no-scale',
    title: 'No hay forma de escalar lo que funciona',
    description: 'Cuando alguien encuentra un buen enfoque, queda encapsulado en su chat personal. No existe un mecanismo para convertir buenas practicas individuales en capacidad organizacional.',
    icon: 'Lock',
  },
  {
    id: 'quality-gap',
    title: 'La calidad depende de quien pregunta',
    description: 'El output de la IA no depende del proceso sino de la persona. Esto genera una brecha de calidad invisible que crece con cada nuevo integrante del equipo.',
    icon: 'AlertTriangle',
  },
]
