"use strict";
// Un archivo simple de TypeScript
function saludar(nombre) {
    console.log("Hola " + nombre.toLocaleUpperCase());
}
var wolverine = {
    nombre: "Logan",
    poder: "Inmortal"
};
saludar(wolverine.nombre);
