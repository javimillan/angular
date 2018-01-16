"use strict";
// las promesas nos permiten ejecutar un código cuando una tarea sincrona ha finalizado. No existen en JS
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //si termina bien
        //resolve();
        //si termina mal
        reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(
//resolve
function () {
    console.log("todo ha ido bien!!");
}, 
//reject
function () {
    console.error("algo ha ido mal!");
});
console.log("Paso 2");
