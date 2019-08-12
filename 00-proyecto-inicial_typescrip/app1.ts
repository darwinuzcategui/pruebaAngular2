
function getNombre() {
    return "Darwin";
    
}
let nombre1:string ="Darwin";
let apellido:string = "Uzcategui";
let edad:number=32;

let texto = "Hola, "+nombre1+ " "+apellido+"("+edad+")";
let texto1 = `hola , ${nombre1} ${apellido}  ( ${edad} )`;
let textoMultipleLinea = `hola ,
 ${nombre1} ${apellido} 
  ( ${edad} )`;
  let textoFormula = ` ${1+5} `
  let textoFuncion = ` ${ getNombre()} `




console.log(texto);
console.log(texto1);
console.log(textoMultipleLinea);
console.log(textoFormula);
console.log(textoFuncion);