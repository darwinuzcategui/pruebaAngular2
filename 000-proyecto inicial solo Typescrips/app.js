"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Un archivo simple de TypeScript
function saludar25(nombre) {
    console.log("saludar a " + nombre.toUpperCase());
}
// realiza un objeto
var xmen = {
    nombre: "Logan"
};
saludar25(xmen.nombre);
// uso  declaracion de variable
var mensaje = "hola";
// let mensaje="233";
var OPCIONES = "TODAAS";
// OPCIONES="123"
if (true) {
    var OPCIONES_1 = "ninguna";
}
console.log(OPCIONES);
if (true) {
    var mensaje_1 = "adios";
}
console.log(mensaje);
var xmen_clases_1 = require("./clases/xmen.clases");
var drXmen = new xmen_clases_1.Xmen("Logan", "DrX");
drXmen.imprimir();
//# sourceMappingURL=app.js.map