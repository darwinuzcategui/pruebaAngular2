"use strict";
// funciones
function getNombre() {
    return "Darwin Felipe";
}
// variable typyscripts
var nombre;
nombre = "pepe";
var nombre2 = "Darwin";
var numero = 123;
var booleano = true;
var hoy = new Date();
hoy = new Date('2019-10-12');
console.log(hoy);
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
var spiderman = {
    nombre: "Peter",
    edad: 20
};
spiderman = {
    nombre: "Pedro",
    edad: 25
};
var nombreDarwin = "Darwin";
var apellidoDarwin = "Uzcategui";
var edadDarwin = 46;
// let texto = "hola "+nombreDarwin+" "+ apellidoDarwin+"("+ edadDarwin +")";
//  ahora con tempalte literal ``
var texto = "hola, " + nombreDarwin + " " + apellidoDarwin + " (" + edadDarwin + ")";
var texto1 = "hola, \n" + nombreDarwin + " " + apellidoDarwin + " ..\n(" + edadDarwin + ")";
var texto2 = "" + (52 + 10);
var texto3 = "" + getNombre();
console.log(texto);
console.log(texto1);
console.log(texto2);
console.log(texto3);
//# sourceMappingURL=app6.js.map