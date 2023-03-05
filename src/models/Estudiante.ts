import { Curso } from "./Curso";

export class Estudiante {
  // propiedades de la clase
  nombre: string;
  apellido?: string;
  cursos: Curso[];

  private ID: string = "123123";

  // Constructor
  constructor(nombre: string, cursos: Curso[], apellido?: string) {
    // inicializamnos las propiedades
    this.nombre = nombre;
    // this.apellido = apellido ? apellido : undefined

    if (apellido) {
      this.apellido = apellido;
    }
    this.cursos = cursos;
  }

  get horasEstudiadas(): number {
    let horasEstudiadas = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });
    return horasEstudiadas;
  }

  set ID_Estudiante(id: string) {
    this.ID = id;
  }
}
