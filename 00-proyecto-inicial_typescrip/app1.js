"use strict";
function getNombre() {
    return "Darwin";
}
var nombre1 = "Darwin";
var apellido = "Uzcategui";
var edad = 32;
var texto = "Hola, " + nombre1 + " " + apellido + "(" + edad + ")";
var texto1 = "hola , " + nombre1 + " " + apellido + "  ( " + edad + " )";
var textoMultipleLinea = "hola ,\n " + nombre1 + " " + apellido + " \n  ( " + edad + " )";
var textoFormula = " " + (1 + 5) + " ";
var textoFuncion = " " + getNombre() + " ";
console.log(texto);
console.log(texto1);
console.log(textoMultipleLinea);
console.log(textoFormula);
console.log(textoFuncion);
