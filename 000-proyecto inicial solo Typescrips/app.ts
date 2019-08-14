// Un archivo simple de TypeScript
function saludar25(nombre:string) {
 
    console.log("saludar a " + nombre.toUpperCase())
}

// realiza un objeto
var xmen = {
    nombre: "Logan"
};
saludar25(xmen.nombre);

// uso  declaracion de variable
let mensaje = "hola";
// let mensaje="233";
const OPCIONES= "TODAAS" ;
// OPCIONES="123"

if  (true){
    const OPCIONES= "ninguna" ;

}

console.log(OPCIONES);
if (true){

    let mensaje = "adios";
}

console.log(mensaje);

import { Xmen } from  "./clases/xmen.clases"

let drXmen = new  Xmen("Logan","DrX");
drXmen.imprimir();