//datos de un objeto
let avenger = {
  nombre: "Steve",
  clave: "Capitán América",
  poder: "Droga"
}

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

//DESTRUCTURACION
//da igual el orden y si ponemos ":" es para indicar alias
let {clave:comolellaman, nombre, poder} = avenger;

console.log(nombre, comolellaman, poder);

//DESTRUCTURACIÓN DE LOS ARREGLOS

let avengers2:string[] = ["Thor","Steve","Tony"];
//se basa en la posicion del arreglo para asignar valores
let [thor, capi, ironman] = avengers2;
let [, , ironman2] = avengers2;

console.log(capi, thor, ironman);
console.log(ironman2);
