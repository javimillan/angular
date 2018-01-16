"use strict";
function enviarMision(wolverine) {
    console.log("Enviando a " + wolverine.nombre);
}
//a la funcion no se le indican los parametros, si no solo la interfaz xMen
//esta interfaz debe tener la misma estructura que necesita la function (nombre, poder)
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolf",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
