"use strict";
//  interface
function enviarMision(xmen) {
    console.log("Enviado a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviado al Cuartel : " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
//# sourceMappingURL=interface.js.map