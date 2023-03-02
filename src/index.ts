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
