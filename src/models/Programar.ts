import { ITarea, Nivel } from "./interfaces/tarea.interface";

export class Programar implements ITarea {
  titulo: string;
  descripcion?: string | undefined;
  compleatada: boolean | undefined;
  urgencia?: Nivel | undefined;

  constructor(
    titulo: string,
    descripcion: string,
    completada: boolean,
    urgencia: Nivel
  ) {
    (this.titulo = titulo),
      (this.descripcion = descripcion),
      (this.compleatada = completada),
      (this.urgencia = urgencia);
  }

  resumen = () => {
    return `Tarea de programacion: ${this.titulo} - ${this.compleatada}`;
  };
}
