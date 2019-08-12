"use strict";
function activar(quien, //parametro obligatorio
objeto, //parametro por defecto
momento) {
    if (objeto === void 0) { objeto = "Funcion activar"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo " + objeto + " en la " + momento + " ";
    }
    else {
        mensaje = quien + " activo la " + objeto + " ";
    }
    console.log(mensaje);
}
//activar("Jose Perez");
activar("darwin", "otros objeto", "tarde");
