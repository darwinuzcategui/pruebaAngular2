// destruturacion de objetos


// ejemplo sin destruturacion
let vengadores = {
    nombrev: "Steve",
    clave: "Capitan Amaerica",
    poder: "Droga"
}

let nombreSinDestr = vengadores.nombrev;
let claveSindestr = vengadores.clave;
let poderSinDestr = vengadores.poder;

console.log( nombreSinDestr, claveSindestr, poderSinDestr);

// con destructuracion de objeto

// en la destructuracion : es una alias
//ejemplo
let {clave:claveAlias, nombrev:nombreAlias, poder:poderAlias }=vengadores;
console.log(nombreAlias,claveAlias,poderAlias );

let {nombrev, clave, poder}=vengadores;
console.log(nombrev,clave,poder );

//destruturacin de arreglo


let avengers:string[] = [ "Bruce","Steve","Tony" ];
// destructuracion de arreglo en secuencia es por posicion
let [ hombreVerde, capi, ironman ] = avengers;

console.log( hombreVerde, capi, ironman );

// si quiere una posicion especifica
let [ , capitanA,  ] = avengers;
console.log( capitanA );

let [ , , ironm  ] = avengers;
console.log( ironm );








