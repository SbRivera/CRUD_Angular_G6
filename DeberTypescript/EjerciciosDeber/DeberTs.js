var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Variables y Tipos
var nombre = "Benjamin";
var edad = 19;
var esMayorEdad = true;
var numeros = [1, 2, 3, 4, 5];
var tupla = ["Hola", 3];
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Martes;
// Funciones
function sumar(a, b) {
    return a + b;
}
function obtenerElemento(arr, indice) {
    return arr[indice];
}
function formatUser(user) {
    return "ID: ".concat(user.id, ", Nombre: ").concat(user.name, ", Email: ").concat(user.email, ", Edad: ").concat(user.age);
}
// Clases
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("\u00A1Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os!"));
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, cargo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.cargo = cargo;
        return _this;
    }
    Empleado.prototype.mostrarCargo = function () {
        console.log("Mi cargo es ".concat(this.cargo));
    };
    return Empleado;
}(Persona));
// Uso de las variables y funciones
var suma = edad + numeros[0];
console.log("La suma de edad y el primer n\u00FAmero es ".concat(suma));
var elementos = [1, 2, 3, 4, 5];
var elemento = obtenerElemento(elementos, 2);
console.log("El elemento en la posici\u00F3n 2 es ".concat(elemento));
var user = { id: 1, name: "Natalia", email: "natalia@example.com", age: 22 };
var userInfo = formatUser(user);
console.log(userInfo);
var empleado = new Empleado("Sebas", 21, "Desarrollador");
empleado.saludar();
empleado.mostrarCargo();
