//  interface

interface Xmen{
    nombre:string;
    poder:string
}


function enviarMision(xmen:Xmen){
    console.log("Enviado a: "+xmen.nombre);
}

function enviarCuartel(xmen:Xmen){
    console.log("Enviado al Cuartel : "+xmen.nombre);
}


let wolverine:Xmen ={
    nombre: "Wolverine",
    poder: "Regeneración"

};
enviarMision(wolverine);
enviarCuartel(wolverine);
