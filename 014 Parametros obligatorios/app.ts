// todo parametro dentro de la funcion es obligatorio
// se puede indicar valor por defecto
// los parametros opcionales se indican con "?"
//los parametros opcionales siempre al final
function activar ( quien:string, objeto:string = "cámara de fotos", momento?:string){
  let mensaje:string;

  //Mostrar solo momento si existe
  if( momento ){
    mensaje = `${quien} cogío la ${objeto} ${momento}`;
  }
  else{
      mensaje = `${quien} cogío la ${objeto}`;
  }
  console.log(mensaje);
}

activar("Javi", "raqueta de tenis", "ayer" );
