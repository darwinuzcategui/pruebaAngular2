// funcion flecha
let  miFuncion = function( a ){
    return a;
}

let miFuncionF =  a  => a;

console.log(miFuncion("Funcion Normal"));
console.log(miFuncionF("Funcion Flecha"));

let miFuncion2 = function( a:number, b:number ){
    return a + b;
}

let miFuncion2F = ( a:number, b:number ) => a + b;

let miFuncion3 = function (nombre:string ){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string )=>{
    nombre = nombre.toUpperCase();
    return nombre;
}

// funcion con objeto 
let hulk = {
    nombre:"Hulk",
    golpe(){
        console.log(this.nombre +" Golpe!!!" );
        
    }
}

hulk.golpe();

// ejemplo de fecha

let nombre5 = "Darwin";

let hulkconFlecha = {
    nombre:"Hulk",
    golpe(){
        //this apunta al mismo objeto en la funcion de flecha
        setTimeout( ()=> console.log(this.nombre +" Golpe !!" )  ,1500);
        
    }
}
hulkconFlecha.golpe();

