"use strict";
var miFuncion = function (a) {
    return a;
};
//misma funcion pero con flecha
var miFuncionF = function (a) { return a; };
console.log(miFuncion("prueba"));
console.log(miFuncionF("pruebaF"));
//ejempo 2
var miFuncion2 = function (a, b) {
    return a + b;
};
//Misma funcion con flecha
var miFuncion2F = function (a, b) { return a + b; };
//ejemplo 3
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//Misma funcion con flecha
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//ejemplo 4
// funcion con timeout
// cuando se ejecuta un timeout dentro de un objeto el THIS del timeout apunta al objeto global, si utilizamos funcion de flecha lo solucionamos
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
