import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string = "Javier";
  arreglo[] = [1,2,3,4,5,6,7,8,9,10];
  pi:number = Math.PI;
  a:string = '0.234';
  salario:number = 1234.5;
  heroe = {
    nombre:"Logan",
    apodo:"Wolverine",
    edad:500,
    direccion:{
      calle:"c/ falsa",
      casa:"7"
    }
  };

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve("Llegó la data con timeout!"), 3500);
  })

  fecha = new Date();

}
