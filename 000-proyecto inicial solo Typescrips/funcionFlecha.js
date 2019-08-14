"use strict";
// funcion flecha
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Funcion Normal"));
console.log(miFuncionF("Funcion Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// funcion con objeto 
var hulk = {
    nombre: "Hulk",
    golpe: function () {
        console.log(this.nombre + " Golpe!!!");
    }
};
hulk.golpe();
// ejemplo de fecha
var nombre5 = "Darwin";
var hulkconFlecha = {
    nombre: "Hulk",
    golpe: function () {
        var _this = this;
        //this apunta al mismo objeto en la funcion de flecha
        setTimeout(function () { return console.log(_this.nombre + " Golpe !!"); }, 1500);
    }
};
hulkconFlecha.golpe();
//# sourceMappingURL=funcionFlecha.js.map