"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, descripcion, completada, urgencia) {
        this.resumen = () => {
            return `Tarea de programacion: ${this.titulo} - ${this.compleatada}`;
        };
        (this.titulo = titulo),
            (this.descripcion = descripcion),
            (this.compleatada = completada),
            (this.urgencia = urgencia);
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map