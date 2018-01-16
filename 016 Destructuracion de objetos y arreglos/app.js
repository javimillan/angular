"use strict";
//datos de un objeto
var avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
//DESTRUCTURACION
//da igual el orden y si ponemos ":" es para indicar alias
var comolellaman = avenger.clave, nombre = avenger.nombre, poder = avenger.poder;
console.log(nombre, comolellaman, poder);
//DESTRUCTURACIÓN DE LOS ARREGLOS
var avengers2 = ["Thor", "Steve", "Tony"];
//se basa en la posicion del arreglo para asignar valores
var thor = avengers2[0], capi = avengers2[1], ironman = avengers2[2];
var ironman2 = avengers2[2];
console.log(capi, thor, ironman);
console.log(ironman2);
