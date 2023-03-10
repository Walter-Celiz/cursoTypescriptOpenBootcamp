"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hola Chango");
console.log("Hola Walter");
// esto es otro comentario
/* esto es un comentario */
// Variables
var nombre = "Martin";
let email = "walter@google.com";
console.log("Hola, " + nombre);
console.log("Que tal, ", nombre, "?");
console.log(`eu soy, ${nombre}?, mi email es: ${email}`);
const PI = 3.1416;
console.log(PI);
// tipados
let name = "gabriel";
let dni = 1234;
let cualquiera = 1234;
cualquiera = "string"; //tratar de no usar, para que sea controlable
let error = false;
console.log(`Hay error ${error}`); //representacion en tipo de dato string de false
// Intanciacion multiple de variables
let a, b, c; // instacia 3 variables sin vablor inicial
a = "TypeScript";
b = 123141.1;
c = true;
//BuilIn Types: number, string, boolean, void, null, undefined
// Tipos mas complejos
// Lista de cadenas de texto
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinar tipos en listas
let valores = [false, "hola", true, 56];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
// Podemos crear variables que singan la interface Tarea
let tarea1 = {
    nombre: "Tarea1",
    estado: Estados.Pendiente,
    urgencia: 10,
};
console.log(`Tarea: ${tarea1.nombre}`);
// Asignacion multople de variables
let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1,
};
// declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// ** Factor spreed
// declaracion con factor de propagacion
let { titulo, estado, urgencia } = miTarea;
// En listas
let listaCompraLunes = ["Leche", "papa"];
let listaCompraMartes = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles = ["carne", "pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];
// En Objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearrer12312",
};
// Cambiar un valor por propagacion
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    nombre: "Audi",
    precio: 4123123,
    anio: 2010,
};
// ** Condicionales
// Operadores Ternarios
console.log(coche.anio < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche ${coche.nombre} es viejo`);
// if/else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
if (coche.anio < 2012) {
    console.log(`Coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es 2010`);
}
else {
    `Coche: ${coche.nombre} es nuevo`;
}
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea esta incompletada");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente");
        break;
    default:
        break;
}
// **Bucles
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2,
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Incompleto,
        urgencia: 0,
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Pendiente,
        urgencia: 1,
    },
];
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
for (let i = 0; i < listaTareasNueva.length; i++) {
    const tarea = listaTareasNueva[i];
    console.log(`${i} - ${tarea.nombre}`);
}
// Bucle While
while (tarea1.estado !== Estados.Completado) {
    tarea1.urgencia++;
    if (tarea1.urgencia === 20) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.urgencia++;
    }
}
// DO WHILE se ejecuta al menos una vez
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
// Funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombreSaludo = "WalterMartin";
    console.log(`Hola, ${nombreSaludo}`);
}
// Invocacion de la funcion
saludar();
/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
// recomendacion siempre tipar la variable de la funcion
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}`);
}
saludarPersona("David");
/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre Nombre de la persona a saludar por defecto sera Pepe
 */
function despedirPersona(nombre = "Pepe") {
    console.log(`Adios, ${nombre}`);
}
despedirPersona(); // adios, Pepe
despedirPersona("Alba"); // adios, Alba
/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre (opcional) Nombre de la persona a despedir
 */
// nombre: string | undefined
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    }
    else {
        console.log(`Adios`);
    }
}
despedidaOpcional(); // adios
despedidaOpcional("Carlo"); // Adios Carlo
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} a??os`);
    }
    else {
        console.log(`${nombre} tiene ${edad} a??os`);
    }
}
variosParams("Martin"); // Martin tiene 18 a??os
variosParams("Martin", "San Jose"); // Martin San Jose tiene 18 a??os
variosParams("Martin", undefined, 30); // Martin  tiene 30 a??os
variosParams("Martin", "San Jose", 30); // Martin San Jose tiene 30 a??os
// variosParams((nombre = "Martin"), (apellidos = "San Jose"), (edad = 30)); //Martin San Jose 30
function ejemploVariosTipos(a) {
    if (typeof a === "string") {
        console.log("A es un string");
    }
    else if (typeof a === "number") {
        console.log("A es un number");
    }
    else {
        console.log("A no es un string ni un number");
        throw Error("A no es un string ni un number");
    }
}
ejemploVariosTipos("Hola");
ejemploVariosTipos(3);
/**
 *
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns El nombre completo de la persona
 */
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Martin", "Carlo jose");
console.log(nombreCompleto); //Martin Carlo jose
console.log(ejemploReturn("Martin", "Carlo jose")); //Martin Carlo jose
/**
 * @params nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("Walter", "Melisa", "David");
const lista = ["Sandra", "Wanda"];
ejemploMultipleParams(...lista);
function ejemploParamsLista(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploParamsLista(lista);
let empleadoMelisa = {
    nombre: "Melisa",
    apellidos: "Celiz",
    edad: 30,
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} a??os`;
// Llamados a la funcion
mostrarEmpleado(empleadoMelisa);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en edad de jubulacion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
};
datosEmpleado(empleadoMelisa); // Empleado Melisa esta en edad laboral
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return ``;
    }
    else {
        return cobrar();
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleadoMelisa, () => "Cobrar Melisa");
// Async functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        // Await
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Tarea completada");
        return "Completado";
    });
}
ejemploAsync()
    .then((respuesta) => {
    console.log("Respuesta", respuesta);
})
    .catch((error) => {
    console.log("Hubo un error", error);
})
    .finally(() => "Todo termino");
// Generators
function* ejemploGenerator() {
    // yield => emite valores
    let index = 0;
    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}
// Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();
// Accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
// Worker
function* watcher(valor) {
    yield valor; //emitimos el valor inicial
    yield* worker(valor); // llamamos a las emisiones del worker para que emito otros valores
    yield valor + 4; // emitimos el valor final + 4
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let genereadorSaga = watcher(0);
console.log(genereadorSaga.next().value); //0 (lo hizo el watcher)
console.log(genereadorSaga.next().value); //1 (lo hizo el worker)
console.log(genereadorSaga.next().value); //2 (lo hizo el worker)
console.log(genereadorSaga.next().value); //3 (lo hizo el worker)
console.log(genereadorSaga.next().value); //4 (lo hizo el watcher)
// Sobrecarga de funciones
function mostrarError(error) {
    console.log("Ha habido un error", error);
}
// Persistencia de datos
// 1. LocalStorage -> Almacena datos en el navegador (no se eleminan automaticamente)
// 2. SessionStorage -> Los datos persisten en la session del navegador
// 3. Cookies -> Tienen una fecha de caducidad y tambien un ambito de url
// Local Storage
function guardarLocalStorage() {
    localStorage.set("nombre", "Walter");
}
function leerLocalStorage() {
    let nombre = localStorage.get("nombre");
}
// Cookies
const cookies_utils_1 = require("cookies-utils");
const cookieOptions = {
    name: "usuario",
    value: "Walter",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/", // optional string,
    // domain: "site.com", // optional string,
    // secure: true, // optional boolean,
    // sameSite: "lax", // optional enum 'lax' | 'strict' | 'none'
};
// Seteamos la cookie
(0, cookies_utils_1.setCookie)(cookieOptions);
// Leer una Cookie
let cookieLeida = (0, cookies_utils_1.getCookieValue)("usuario");
// Eliminar
(0, cookies_utils_1.deleteCookie)("usuario");
// Eliminar todas las Cookies
(0, cookies_utils_1.deleteAllCookies)();
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return;
            // cuando pase el tiempo del settimeout se ejecutara la funcion terminar
            this.terminar(Date.now());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// Definir la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log("Terminamos la tarea en: ", tiempo);
};
// Lanzamos el temporizador
miTemporizador.empezar(); // Se inicia el timeout y cuando termine, se ejecuta la funcion terminar()
setInterval(() => console.log("Tic"), 1000); // imprime "tic" cada segundo por consola
// Eliminar la ejecucion de la funcion
delete miTemporizador.terminar;
// Clases
// Creamos un curso
// const cursoTS: Curso = new Curso("TypeScript", 15);
// const cursoJS: Curso = new Curso("JavaScript", 25);
// const listaCursos: Curso[] = [];
// listaCursos.push(cursoTS, cursoJS); //[Lista de cursos]
// Usamos el Mock
const Persona_1 = require("./models/Persona");
const cursos_mock_1 = require("./mock/cursos.mock");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// Creamos un estudiante
const gabriel = new Estudiante_1.Estudiante("Gabriel", listaCursos, "Celiz");
console.log(`${gabriel.nombre} estudia: `);
// Iteramos por cada uno de ellos
gabriel.cursos.forEach((curso) => {
    console.log(`- ${curso} ${curso.horas}`); // Typescript (15 horas)
});
const cursoAngular = new Curso_1.Curso("Angular", 40);
gabriel.cursos.push(cursoAngular);
// Conocer las horas Estudiadas
gabriel.horasEstudiadas; // number
gabriel.ID_Estudiante;
// Saber la instancia de un objeto/variable
// let texto = new String("Hola")
// Instanceof
let fechaNaciemiento = new Date(1991, 10, 10);
if (fechaNaciemiento instanceof Date) {
}
if (gabriel instanceof Estudiante_1.Estudiante) {
    console.log("martin es un Estudiante");
}
// Herencia y Polimorfismo
let trabajador1 = new Persona_1.Trabajador("Jose", "Sande", 50, 2000);
let trabajador2 = new Persona_1.Trabajador("Marcela", "Ominetti", 50, 2200);
let trabajador3 = new Persona_1.Trabajador("Antonio", "Segovia", 51, 2000);
let jefe = new Persona_1.Jefe("Pablo", "Garcia", 60);
jefe.empleados.push(trabajador1, trabajador2, trabajador3);
trabajador1.saludar(); // espesificado en Trabajador
jefe.saludar(); // Herencia de la persona
jefe.empleados.forEach((trabajador) => {
    trabajador.saludar(); // especifico en Trabajador
});
// * Uso de Interfaces
const tarea_interface_1 = require("./models/interfaces/tarea.interface");
const Programar_1 = require("./models/Programar");
let programar = {
    titulo: "Programar en TypeScript",
    descripcion: "Practicar con katas para aprender a desarrollar con TS",
    compleatada: false,
    urgencia: tarea_interface_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.compleatada}`;
    },
};
console.log(programar.resumen);
// Tarea de Programacion (implementa ITarea)
let programarTS = new Programar_1.Programar("Typescript", "Tarea de programacion en TS", false, tarea_interface_1.Nivel.Bloqueante);
console.log(programarTS.resumen());
// Decoradores Experimentales -> @
// - Clases
// - Par??metros
// - M??todos
// - Propiedades
// function Override(label: string) {
//   return function (target: any, key: string) {
//     //any = clase, key= lo que se modifica
//     Object.defineProperty(target, key, {
//       configurable: false,
//       get: () => label,
//     });
//   };
// }
// class PruebaDecorador {
//   @Override("prueba") // llamar a la funcion Override
//   nombre: string = "Carlos";
// }
// let prueba = new PruebaDecorador();
// console.log(prueba.nombre); // "Prueba" siempre va a edvolver a travez el get()
// Otra function para usarla como decorador
// function SoloLectura(target: any, key: string) {
//   Object.defineProperty(target, key, {
//     writable: false,
//   });
// }
// class PruebaSoloLectura {
//   @SoloLectura
//   nombre: string = "";
// }
// let pruebaLectura = new PruebaSoloLectura();
// pruebaLectura.nombre = "Martin";
// console.log(pruebaLectura.nombre); // ==> undefined siempre, no  se le puede dar un valor por el decorador
// Decorador para parametros de un metodo
// function mostrarPosicion(
//   target: any,
//   propertyKey: string,
//   parameterIndex: number
// ) {
//   console.log("Posicion", parameterIndex);
// }
// class PruebaMetodoDecorador {
//   prueba(a: string, @mostrarPosicion b: boolean) {
//     console.log(b);
//   }
// }
// // Usamos el metodo con el paramentro y su decorador
// new PruebaMetodoDecorador().prueba("Hola", false);
//# sourceMappingURL=index.js.map