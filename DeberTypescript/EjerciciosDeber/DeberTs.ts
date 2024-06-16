// Variables y Tipos
let nombre: string = "Benjamin";
let edad: number = 19;
let esMayorEdad: boolean = true;
let numeros: number[] = [1, 2, 3, 4, 5];
let tupla: [string, number] = ["Hola", 3];
enum DiaSemana { Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo }
let dia: DiaSemana = DiaSemana.Martes;

// Funciones
function sumar(a: number, b: number): number {
    return a + b;
}

function obtenerElemento<T>(arr: T[], indice: number): T {
    return arr[indice];
}

// Interfaces
interface Usuario {
    id: number;
    name: string;
    email: string;
    age: number;
}

function formatUser(user: Usuario): string {
    return `ID: ${user.id}, Nombre: ${user.name}, Email: ${user.email}, Edad: ${user.age}`;
}

// Clases
class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`¡Hola, soy ${this.nombre} y tengo ${this.edad} años!`);
    }
}

class Empleado extends Persona {
    private cargo: string;

    constructor(nombre: string, edad: number, cargo: string) {
        super(nombre, edad);
        this.cargo = cargo;
    }

    mostrarCargo(): void {
        console.log(`Mi cargo es ${this.cargo}`);
    }
}

// Uso de las variables y funciones
let suma: number = edad + numeros[0];
console.log(`La suma de edad y el primer número es ${suma}`);

let elementos = [1, 2, 3, 4, 5];
let elemento: number = obtenerElemento<number>(elementos, 2);
console.log(`El elemento en la posición 2 es ${elemento}`);

let user: Usuario = { id: 1, name: "Natalia", email: "natalia@example.com", age: 22 };
let userInfo: string = formatUser(user);
console.log(userInfo);

let empleado = new Empleado("Sebas", 21, "Desarrollador");
empleado.saludar();
empleado.mostrarCargo();
