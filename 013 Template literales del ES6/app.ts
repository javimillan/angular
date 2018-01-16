let nombre2:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
let texto = `Hola, ${nombre2} ${apellido} (${edad})`;

let texto2:string = `${1 + 2}`;

function getNombre(){
  return "Javi";
}
let texto3:string = `${getNombre()}`;
console.log(texto);
console.log(texto2);
console.log(texto3);
