"use strict";
// todo parametro dentro de la funcion es obligatorio
// se puede indicar valor por defecto
// los parametros opcionales se indican con "?"
//los parametros opcionales siempre al final
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "cámara de fotos"; }
    var mensaje;
    //Mostrar solo momento si existe
    if (momento) {
        mensaje = quien + " cog\u00EDo la " + objeto + " " + momento;
    }
    else {
        mensaje = quien + " cog\u00EDo la " + objeto;
    }
    console.log(mensaje);
}
activar("Javi", "raqueta de tenis", "ayer");
