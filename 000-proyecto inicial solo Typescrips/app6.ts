// funciones
function getNombre() {
    return "Darwin Felipe";
    
}
// variable typyscripts
let nombre:string ;
nombre = "pepe";
let nombre2:string = "Darwin";
let numero:number =123;
let booleano:boolean =true;

let hoy:Date = new Date();
hoy= new Date('2019-10-12') ;

console.log( hoy );

let cualquiera:any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
    nombre: "Peter",
    edad: 20
}

spiderman ={
    nombre: "Pedro",
    edad:25

}

let  nombreDarwin: string ="Darwin";
let  apellidoDarwin: string ="Uzcategui";
let  edadDarwin: number =46;

// let texto = "hola "+nombreDarwin+" "+ apellidoDarwin+"("+ edadDarwin +")";
//  ahora con tempalte literal ``
let texto = `hola, ${ nombreDarwin } ${ apellidoDarwin } (${ edadDarwin})`;
let texto1 = `hola, 
${ nombreDarwin } ${ apellidoDarwin } ..
(${ edadDarwin})`;

let texto2:string = `${ 52+10 }`;
let texto3:string = `${ getNombre() }`;



console.log(texto);
console.log(texto1);
console.log(texto2);
console.log(texto3);





