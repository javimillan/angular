let miFuncion = function(a:any){
  return a;
}
//misma funcion pero con flecha
let miFuncionF = (a:any) => a;

console.log(miFuncion("prueba"));
console.log(miFuncionF("pruebaF"));

//ejempo 2
let miFuncion2 = function(a:number, b:number){
  return a + b;
}
//Misma funcion con flecha
let miFuncion2F = (a:number, b:number)=> a + b;

//ejemplo 3
let miFuncion3 = function (nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}
//Misma funcion con flecha
let miFuncion3F =  (nombre:string)=>{
  nombre = nombre.toUpperCase();
  return nombre;
}

//ejemplo 4
// funcion con timeout
// cuando se ejecuta un timeout dentro de un objeto el THIS del timeout apunta al objeto global, si utilizamos funcion de flecha lo solucionamos
let hulk = {
  nombre: "Hulk",
  smash(){
    setTimeout(()=> console.log(this.nombre + " smash!!"), 1500);
  }
}
hulk.smash();
