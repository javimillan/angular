import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'; // para los operadores map
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class myWeatherService implements OnInit{
  constructor(public _http:HttpClient, public _geolocation: Geolocation) {

  // this.getWeather();

}

ngOnInit() {


}

key:string= "e276774f8069a33e";
lat:number;
lon:number;
temp:any;
tempMax:any;
tempMin:any;




getURL(lat:number, lon:number, key:string){
  var url = `http://api.wunderground.com/api/${key}/forecast/geolookup/conditions/q/${lat},${lon}.json`;
  console.log(url)
  return this._http.get(url);

}

myTime() {
    var d = new Date();
    var n = d.getHours();
    console.log(n)
    if(n < 6){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "powderblue";
      document.getElementsByClassName("content")[0].style.backgroundColor = "powderblue";
    }
    if(5 > n < 15){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "yellow";
      document.getElementsByClassName("content")[0].style.backgroundColor = "yellow";
    }
    if(14 > n < 21){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "red";
      document.getElementsByClassName("content")[0].style.backgroundColor = "red";
    }
    if( 20 < n  ){
      document.getElementsByClassName("toolbar-background")[0].style.backgroundColor = "darkblue";
      document.getElementsByClassName("content")[0].style.backgroundColor = "darkblue";
    }
}

}
