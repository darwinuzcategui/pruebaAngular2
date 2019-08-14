"use strict";
//promesas es6
var prom1 = new Promise(function (resolver, rechasar) {
    setTimeout(function () {
        console.log("Promesa terminada");
        // termina bien
        resolver();
        // termina mal
        // rechasar();
    }, 2000);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutar cuando se termine bien!");
}, function () {
    console.error("Ejecuta si Todo sale mal");
});
console.log("Paso 2");
//# sourceMappingURL=promesasEs6.js.map