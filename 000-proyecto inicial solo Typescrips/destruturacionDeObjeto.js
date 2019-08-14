"use strict";
// destruturacion de objetos
// ejemplo sin destruturacion
var vengadores = {
    nombrev: "Steve",
    clave: "Capitan Amaerica",
    poder: "Droga"
};
var nombreSinDestr = vengadores.nombrev;
var claveSindestr = vengadores.clave;
var poderSinDestr = vengadores.poder;
console.log(nombreSinDestr, claveSindestr, poderSinDestr);
// con destructuracion de objeto
// en la destructuracion : es una alias
//ejemplo
var claveAlias = vengadores.clave, nombreAlias = vengadores.nombrev, poderAlias = vengadores.poder;
console.log(nombreAlias, claveAlias, poderAlias);
var nombrev = vengadores.nombrev, clave = vengadores.clave, poder = vengadores.poder;
console.log(nombrev, clave, poder);
//destruturacin de arreglo
var avengers = ["Bruce", "Steve", "Tony"];
// destructuracion de arreglo en secuencia es por posicion
var hombreVerde = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(hombreVerde, capi, ironman);
// si quiere una posicion especifica
var capitanA = avengers[1];
console.log(capitanA);
var ironm = avengers[2];
console.log(ironm);
//# sourceMappingURL=destruturacionDeObjeto.js.map