// class Vengadores {

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
function consola( constructor:Function){
    console.log( constructor);
}

@consola
class VillanoConDecorador{
    constructor (public nombre:string){

    }
}