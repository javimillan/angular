import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { myWeatherService } from '../../services/myWeather.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{


  constructor(public navCtrl: NavController, public _myWeather: myWeatherService, public _geolocation: Geolocation) {
    console.log("_myWeather");
    console.log(_myWeather);

  }

    ngOnInit() {

      this.getData();
      this._myWeather.myTime();

    }

    key:string = this._myWeather.key;
    lat:number = this._myWeather.lat;
    lon:number = this._myWeather.lon;
    temp:any ;
    tempMax:any;
    tempMin:any;
    lastHour:any;
    lastHourSplit:any;

    getData(){
      console.log("test")
      console.log("test2")
      this._myWeather._geolocation.getCurrentPosition().then((pos) => {
      console.log("test3");
      console.log(pos);
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;

      this._myWeather.getURL(this.lat, this.lon, this.key)
    .subscribe( resp => {
      console.log( "resp" );
      console.log( resp );
      this.temp = resp.current_observation.temp_c;
      this.tempMax = resp.forecast.simpleforecast.forecastday["0"].high.celsius;
      this.tempMin = resp.forecast.simpleforecast.forecastday["0"].low.celsius;
      this.lastHour = resp.current_observation.local_time_rfc822;
      this.lastHourSplit = this.lastHour.split(" ")[4]
        console.log(this.lastHourSplit)
 });
  });
}



  doRefresh(refresher) {
     console.log('Begin async operation', refresher);
     console.log('recargando datos');
     this.getData();


     setTimeout(() => {
       console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
   }




}
