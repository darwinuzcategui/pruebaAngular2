"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensajeBati;
    if (momento) {
        mensajeBati = quien + " activo " + objeto + " en la " + momento;
    }
    else {
        mensajeBati = quien + " activo " + objeto;
    }
    console.log(mensajeBati);
}
activar("Gordon", "batiseñal", "tarde");
//# sourceMappingURL=parametroObligatorio.js.map