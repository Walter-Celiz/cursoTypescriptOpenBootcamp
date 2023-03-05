export enum Nivel {
  "Informativa",
  "Urgente",
  "Bloqueante",
}

// Interface sirve para definir la firma y los puntos necesarios a implementar por quien la use
// El aspecto que debe tener
export interface ITarea {
  titulo: string;
  descripcion?: string;
  compleatada: boolean | undefined;
  urgencia?: Nivel;
  resumen: () => string; // devuelve un string
}
