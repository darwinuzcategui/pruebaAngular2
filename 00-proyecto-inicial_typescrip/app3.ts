let nombre:string = "Darwin";
let numero:number = 123;
let booleano:boolean =true;
let hoy:Date= new Date();
let cualquiera:any;
cualquiera = nombre;
console.log(cualquiera);
cualquiera = numero,
cualquiera = booleano;
console.log(cualquiera);
cualquiera = hoy ;
hoy = new Date("2018-07-07");

let spiderman = {
    nombre: "Peter",
    edad: 30,

}

spiderman = {
    nombre:"Darwin",
    edad:30,
 
}



console.log(booleano);
console.log(nombre);
console.log(hoy);
console.log(numero);
console.log (spiderman);
console.log(spiderman.edad);