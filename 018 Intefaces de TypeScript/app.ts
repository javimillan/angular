interface xMen{
  nombre:string,
  poder:string
}

function enviarMision (wolverine){
  console.log("Enviando a " + wolverine.nombre);
}

//a la funcion no se le indican los parametros, si no solo la interfaz xMen
//esta interfaz debe tener la misma estructura que necesita la function (nombre, poder)

function enviarCuartel (xmen:xMen){
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolverine = {
  nombre: "Wolf",
  poder: "Regeneración"
}

enviarMision(wolverine);
enviarCuartel(wolverine);
