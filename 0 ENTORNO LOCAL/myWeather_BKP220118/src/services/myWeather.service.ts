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
}

myTime() {
    let d:any = new Date();
    let h:any = d.getHours();
    let m:any = d.getMinutes();
    let s:any = d.getSeconds();

    if(h < 6){
      (document.querySelector('.toolbar-background') as HTMLElement).style.backgroundColor = 'powderblue';
      (document.querySelector('.content') as HTMLElement).style.backgroundColor = 'powderblue';
      // document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "powderblue";
      // document.getElementsByClassName("content")[0].style.backgroundColor = "powderblue";
    }
    if(5 < h < 15){
      (document.querySelector('.toolbar-background') as HTMLElement).style.backgroundColor = 'yellow';
      (document.querySelector('.content') as HTMLElement).style.backgroundColor = 'yellow';
      // document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "yellow";
      // document.getElementsByClassName("content")[0].style.backgroundColor = "yellow";
    }
    if(14 < h < 21){
      (document.querySelector('.toolbar-background') as HTMLElement).style.backgroundColor = 'red';
      (document.querySelector('.content') as HTMLElement).style.backgroundColor = 'red';
      // document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "grey";
      // document.getElementsByClassName("content")[0].style.backgroundColor = "grey";
    }
    if( 20 < h  ){
      (document.querySelector('.toolbar-background') as HTMLElement).style.backgroundColor = 'darkblue';
      (document.querySelector('.content') as HTMLElement).style.backgroundColor = 'darkblue';
      // document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "darkblue";
      // document.getElementsByClassName("content")[0].style.backgroundColor = "darkblue";
    }
}

}
