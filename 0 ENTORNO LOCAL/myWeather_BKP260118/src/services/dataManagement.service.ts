import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; // para los operadores map
import { Geolocation } from '@ionic-native/geolocation';
import { AgregarComponent} from '../pages/agregar/agregar.component';
import { AboutPage} from '../pages/about/about';

@Injectable()
export class dataManagementService implements OnInit{


  listas:any[] = [];
  delete:boolean = false;
  listasTemp:any[] = []
  // listasTempItem:any[] = []


  constructor(public _http:HttpClient, public _geolocation: Geolocation) {

    console.log("dataManagementService iniciado! ");
}

ngOnInit() {
}

actualizarData(){
  localStorage.setItem("data", JSON.stringify(this.listas));
  console.log("LISTAS ACTUALIZAR");
  console.log(this.listas);
}
cargarData(){
  if (localStorage.getItem("data")){
    this.listas = JSON.parse(localStorage.getItem("data"));
    console.log("LISTAS CARGAR");
    console.log(this.listas);
  }
}
borrarItem(i:number){
  this.listas.splice(i,1);
  this.actualizarData();
  console.log(this.listas.length)
  if (this.listas.length == 0){
    this.delete = false;
  }
}
checkListaLength(){
  console.log(this.listas.length)
  if (this.listas.length > 0){
    this.delete = !this.delete
  }
}





}
