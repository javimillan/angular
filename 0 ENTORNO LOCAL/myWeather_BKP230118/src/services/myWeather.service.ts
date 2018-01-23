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
  icons:any[] = [
    {
      name:"moon",
      url:"http://www.jmillan.com/projects/myWeather/images/023-moon.png"
    }
  ];

  constructor(public _http:HttpClient, public _geolocation: Geolocation) {

}

ngOnInit() {
}

myTime() {
    let d:any = new Date();
    let h:number = d.getHours();
    let m:any = d.getMinutes();
    let s:any = d.getSeconds();

    if(h < 6){
      (document.querySelector('.toolbar-background') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat";
      (document.querySelector('.content') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat";
    }
    if((5 < h) || (h < 15)){
      (document.querySelector('.toolbar-background') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat";
      (document.querySelector('.content') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat";
    }
    if ((14 < h) || (h < 21)){
      (document.querySelector('.toolbar-background') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat ";
      (document.querySelector('.content') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat";
    }
    if( 20 < h  ){
      (document.querySelector('.toolbar-background') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat ";
      (document.querySelector('.content') as HTMLElement).style.background = "url('http://www.jmillan.com/projects/myWeather/images/night1.jpg') no-repeat";
    }
}






}
