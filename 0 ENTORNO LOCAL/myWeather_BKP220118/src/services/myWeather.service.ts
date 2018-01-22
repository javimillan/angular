import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; // para los operadores map
import { Geolocation } from '@ionic-native/geolocation';

import { Http } from '@angular/http';

@Injectable()
export class myWeatherService implements OnInit{


  key:any= "e276774f8069a33e";
  lat:any;
  lon:any;
  temp:any;
  tempMax:any;
  tempMin:any;
  datos:any;
  val:any;

  constructor(public _http:HttpClient, public _geolocation: Geolocation) {

}

ngOnInit() {
  // this.getURL();
  // this.getPos();
}

// subscribe del getPos y recuperar para getData




myTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if(h < 6){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "powderblue";
      document.getElementsByClassName("content")[0].style.backgroundColor = "powderblue";
    }
    if(5 < h < 15){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "yellow";
      document.getElementsByClassName("content")[0].style.backgroundColor = "yellow";
    }
    if(14 < h < 21){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "grey";
      document.getElementsByClassName("content")[0].style.backgroundColor = "grey";
    }
    if( 20 < h  ){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "darkblue";
      document.getElementsByClassName("content")[0].style.backgroundColor = "darkblue";
    }
}

}
