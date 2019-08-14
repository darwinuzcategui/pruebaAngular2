"use strict";
// class Vengadores {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     // propiedades de la clases definidas
//     nombre:string = "Capitan America" ;
//     equipo:string = undefined;
//     nombreReal:string = undefined;
//     puedePelear:boolean = false;
//     peleasGanadas:number= 0;
//     //Definicion de contructor en una funcion inicializadora
//     constructor( nombreParametroContructor:string, equipo:string, nombreReal:string ){
//         console.log("Se ejecuto el contructor")
//         // this siempre hace referencia a las propiedades de la clases
//         this.nombre = nombreParametroContructor;
//         this.equipo = equipo;
//         this.nombreReal = nombreReal;
//     }
// }
// let instaciaobjetoClases:Vengadores =new  Vengadores("Atman","capi","Scot Lang");
// console.log(instaciaobjetoClases);
// funcion decorador
function consola(constructor) {
    console.log(constructor);
}
var VillanoConDecorador = /** @class */ (function () {
    function VillanoConDecorador(nombre) {
        this.nombre = nombre;
    }
    VillanoConDecorador = __decorate([
        consola
    ], VillanoConDecorador);
    return VillanoConDecorador;
}());
//# sourceMappingURL=clasesBasica.js.map