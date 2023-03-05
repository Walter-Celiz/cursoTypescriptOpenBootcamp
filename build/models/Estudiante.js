"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    // Constructor
    constructor(nombre, cursos, apellido) {
        this.ID = "123123";
        // inicializamnos las propiedades
        this.nombre = nombre;
        // this.apellido = apellido ? apellido : undefined
        if (apellido) {
            this.apellido = apellido;
        }
        this.cursos = cursos;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map