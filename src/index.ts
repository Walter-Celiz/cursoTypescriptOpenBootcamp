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
let name: string = "gabriel";
let dni: number = 1234;
let cualquiera: any = 1234;
cualquiera = "string"; //tratar de no usar, para que sea controlable

let error: boolean = false;

console.log(`Hay error ${error}`); //representacion en tipo de dato string de false

// Intanciacion multiple de variables
let a: string, b: number, c: boolean; // instacia 3 variables sin vablor inicial

a = "TypeScript";
b = 123141.1;
c = true;

//BuilIn Types: number, string, boolean, void, null, undefined

// Tipos mas complejos
// Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

// Combinar tipos en listas
let valores: (string | number | boolean)[] = [false, "hola", true, 56];

// Enumerados
enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Similar a una clase
interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

// Podemos crear variables que singan la interface Tarea
let tarea1: Tarea = {
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
let listaCompraLunes: string[] = ["Leche", "papa"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["carne", "pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];

// En Objetos
let estadoApp = {
  usuario: "admin",
  session: 3,
  jwt: "Bearrer12312",
};
// Cambiar un valor por propagacion
let nuevoEstado = {
  ...estadoApp,
  session: 4,
};

// Types de TypeScript, para conjunto complejo
type Producto = {
  precio: number;
  nombre: string;
  anio: number;
};

let coche: Producto = {
  nombre: "Audi",
  precio: 4123123,
  anio: 2010,
};

// ** Condicionales
// Operadores Ternarios
console.log(
  coche.anio < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche ${coche.nombre} es viejo`
);

// if/else
if (error) {
  console.log("Hay un error");
} else {
  console.log("No hay un error");
}

if (coche.anio < 2012) {
  console.log(`Coche: ${coche.nombre} es viejo`);
} else if (coche.anio === 2010) {
  console.log(`Coche: ${coche.nombre} es 2010`);
} else {
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

let listaTareasNueva: Tarea[] = [
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

listaTareasNueva.forEach((tarea: Tarea, index: number) => {
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
  } else {
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
function saludarPersona(nombre: string) {
  console.log(`Hola ${nombre}`);
}

saludarPersona("David");

/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre Nombre de la persona a saludar por defecto sera Pepe
 */
function despedirPersona(nombre: string = "Pepe") {
  console.log(`Adios, ${nombre}`);
}

despedirPersona(); // adios, Pepe
despedirPersona("Alba"); // adios, Alba

/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre (opcional) Nombre de la persona a despedir
 */
// nombre: string | undefined
function despedidaOpcional(nombre?: string) {
  if (nombre) {
    console.log(`Adios, ${nombre}`);
  } else {
    console.log(`Adios`);
  }
}

despedidaOpcional(); // adios
despedidaOpcional("Carlo"); // Adios Carlo

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
  if (apellidos) {
    console.log(`${nombre} ${apellidos} tiene ${edad} años`);
  } else {
    console.log(`${nombre} tiene ${edad} años`);
  }
}

variosParams("Martin"); // Martin tiene 18 años
variosParams("Martin", "San Jose"); // Martin San Jose tiene 18 años
variosParams("Martin", undefined, 30); // Martin  tiene 30 años
variosParams("Martin", "San Jose", 30); // Martin San Jose tiene 30 años
// variosParams((nombre = "Martin"), (apellidos = "San Jose"), (edad = 30)); //Martin San Jose 30

function ejemploVariosTipos(a: string | number) {
  if (typeof a === "string") {
    console.log("A es un string");
  } else if (typeof a === "number") {
    console.log("A es un number");
  } else {
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
function ejemploReturn(nombre: string, apellidos: string): string {
  return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Martin", "Carlo jose");
console.log(nombreCompleto); //Martin Carlo jose
console.log(ejemploReturn("Martin", "Carlo jose")); //Martin Carlo jose

/**
 * @params nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres: string[]): void {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploMultipleParams("Walter", "Melisa", "David");
const lista = ["Sandra", "Wanda"];
ejemploMultipleParams(...lista);

function ejemploParamsLista(nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploParamsLista(lista);

// Arrow Functions
type Empleado = {
  nombre: string;
  apellidos: string;
  edad: number;
};

let empleadoMelisa: Empleado = {
  nombre: "Melisa",
  apellidos: "Celiz",
  edad: 30,
};

const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} tiene ${empleado.edad} años`;

// Llamados a la funcion
mostrarEmpleado(empleadoMelisa);

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 70) {
    return `Empleado ${empleado.nombre} esta en edad de jubulacion`;
  } else {
    return `Empleado ${empleado.nombre} esta en edad laboral`;
  }
};

datosEmpleado(empleadoMelisa); // Empleado Melisa esta en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
  if (empleado.edad > 70) {
    return ``;
  } else {
    return cobrar();
  }
};

const cobrarEmpleado = (empleado: Empleado) => {
  console.log(`${empleado.nombre} cobra su salario`);
};

obtenerSalario(empleadoMelisa, () => "Cobrar Melisa");

// Async functions

async function ejemploAsync(): Promise<string> {
  // Await
  await console.log(
    "Tarea a completar antes de seguir con la secuencia de instrucciones"
  );
  console.log("Tarea completada");
  return "Completado";
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
function* watcher(valor: number) {
  yield valor; //emitimos el valor inicial
  yield* worker(valor); // llamamos a las emisiones del worker para que emito otros valores
  yield valor + 4; // emitimos el valor final + 4
}

function* worker(valor: number) {
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

function mostrarError(error: string | number): void {
  console.log("Ha habido un error", error);
}

// Persistencia de datos
// 1. LocalStorage -> Almacena datos en el navegador (no se eleminan automaticamente)
// 2. SessionStorage -> Los datos persisten en la session del navegador
// 3. Cookies -> Tienen una fecha de caducidad y tambien un ambito de url

// Local Storage
// function guardarLocalStorage(): void {
//   localStorage.set("nombre", "Walter");
// }

// function leerLocalStorage(): void {
//   let nombre = localStorage.get("nombre");
// }

// Cookies
import {
  deleteAllCookies,
  deleteCookie,
  getCookieValue,
  setCookie,
} from "cookies-utils";

const cookieOptions = {
  name: "usuario", // string,
  value: "Walter", // string,
  maxAge: 10 * 60, // optional number (value in seconds),
  expires: new Date(2099, 10, 1), // optional Date,
  path: "/", // optional string,
  // domain: "site.com", // optional string,
  // secure: true, // optional boolean,
  // sameSite: "lax", // optional enum 'lax' | 'strict' | 'none'
};

// Seteamos la cookie
setCookie(cookieOptions);

// Leer una Cookie
let cookieLeida = getCookieValue("usuario");

// Eliminar
deleteCookie("usuario");

// Eliminar todas las Cookies
deleteAllCookies();

class Temporizador {
  public terminar?: (tiempo: number) => void;
  public empezar(): void {
    setTimeout(() => {
      if (!this.terminar) return;
      // cuando pase el tiempo del settimeout se ejecutara la funcion terminar
      this.terminar(Date.now());
    }, 10000);
  }
}

const miTemporizador: Temporizador = new Temporizador();

// Definir la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo: number) => {
  console.log("Terminamos la tarea en: ", tiempo);
};

// Lanzamos el temporizador
miTemporizador.empezar(); // Se inicia el timeout y cuando termine, se ejecuta la funcion terminar()

setInterval(() => console.log("Tic"), 1000); // imprime "tic" cada segundo por consola

// Eliminar la ejecucion de la funcion
delete miTemporizador.terminar;

// Clases

import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";

// Creamos un curso
// const cursoTS: Curso = new Curso("TypeScript", 15);
// const cursoJS: Curso = new Curso("JavaScript", 25);

// const listaCursos: Curso[] = [];

// listaCursos.push(cursoTS, cursoJS); //[Lista de cursos]

// Usamos el Mock
import { LISTA_CURSOS } from "./mock/cursos.mock";
const listaCursos: Curso[] = LISTA_CURSOS;

// Creamos un estudiante
const gabriel: Estudiante = new Estudiante("Gabriel", listaCursos, "Celiz");

console.log(`${gabriel.nombre} estudia: `);
// Iteramos por cada uno de ellos
gabriel.cursos.forEach((curso) => {
  console.log(`- ${curso} ${curso.horas}`); // Typescript (15 horas)
});

const cursoAngular: Curso = new Curso("Angular", 40);
gabriel.cursos.push(cursoAngular);

// Conocer las horas Estudiadas
gabriel.horasEstudiadas; // number
gabriel.ID_Estudiante;

// Saber la instancia de un objeto/variable
