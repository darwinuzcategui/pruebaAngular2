let miFuncion = function( a ){
    return a;
}

let miFuncionF = a => a;

let  miFuncion2 = function ( a:number, b: number ) {
    return  a + b;
}

let miFuncion2F = (a:number, b:number )=> a+b;

let miFuncion3 = function (nombre:string ){
    nombre = nombre.toLocaleUpperCase();
    return nombre;
}
let miFuncion3F =(nombre:string )=>{
    nombre = nombre.toLocaleUpperCase();
    return nombre;
}

console.log( miFuncion("Normal") );

console.log(miFuncionF("Flecha"));

// con funcion normal porque utilizar funcion de flecha
let hulk ={
    nombre: "Hulk",
    smash(){
        console.log(this.nombre + " smash!!!");
    }

}
hulk.smash();

// por que utilizar funcion de flecha

let nombre1 ="Pedro que es global";
let hulk1 ={
    nombre1: "Hulk",
    smash1(){
        setTimeout(function() { //eso pasa porque apunta al objeto global
         console.log(this.nombre1 + " smash!!!");

        },1500 );
       
    }

}
hulk1.smash1();

let nombre1f ="Pedro que es global";
let hulk1f ={
    nombre1f: "Hulk flecha",
    smash1f(){
        setTimeout( () =>console.log(this.nombre1f + " smash!!!"),500)  // funcion de flecha
            }
           }

}
hulk1f.smash1f();


