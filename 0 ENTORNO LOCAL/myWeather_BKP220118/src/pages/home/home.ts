import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { myWeatherService } from '../../services/myWeather.service';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/Rx'; // para los operadores map
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public _http:HttpClient, public navCtrl: NavController, public _myWeather: myWeatherService, public _geolocation: Geolocation) {

    console.log("_myWeather");


    this.detailsArray = [
      {
        name:"Humedad",
        url:"xx",
        value:"xx"
      },
      {
        name:"Viento",
        url:"xx",
        value:"xx"
      },
      {
        name:"Sensación térmica",
        url:"xx",
        value:"xx"
      }
    ];

  } // cierre CONSTRUCTOR

    ngOnInit() {
      this._myWeather.myTime();
      this.getPos();

    }

    getPos():any{
      this._geolocation.getCurrentPosition()
      .then((res:any) => {

        this.lat = res.coords.latitude
        this.lon = res.coords.longitude

          let url:any = `http://api.wunderground.com/api/${this.key}/forecast/geolookup/conditions/q/${this.lat},${this.lon}.json`;
          // Observable al que nos debemos subscribir
          // Los observables no se disparan hasta que no nos subscribimos a ellos
          // console.log(this._http.get(url));
          this._http.get(url)
          .subscribe((resp:any) => {
            console.log(resp)
            this.temp = resp.current_observation.temp_c;
            this.tempMax = resp.forecast.simpleforecast.forecastday["0"].high.celsius;
            this.tempMin = resp.forecast.simpleforecast.forecastday["0"].low.celsius;
            this.lastHour = resp.current_observation.local_time_rfc822;
            this.lastHourSplit = this.lastHour.split(" ")[4];
            this.city = resp.current_observation.display_location.city;
            this.dateDay = resp.forecast.simpleforecast.forecastday["0"].date.day;

            this.dateMonth = resp.forecast.simpleforecast.forecastday["0"].date.month;
            if(this.dateMonth < 10){
              this.dateMonth = "0" + this.dateMonth;
            }
            this.dateYear = resp.forecast.simpleforecast.forecastday["0"].date.year;
        });

    }).catch((error) => {
        console.log('Error getting location', error);
      });
    }

    key:any = this._myWeather.key;
    lat:any = this._myWeather.lat;
    lon:any = this._myWeather.lon;
    temp:any ;
    tempMax:any;
    tempMin:any;
    lastHour:any;
    lastHourSplit:any;
    city:any;
    dateDay:any;
    dateMonth:any;
    dateYear:any;
    detailsArray:any[];
    datos:any;




  //
  doRefresh(refresher) {
     console.log('Begin async operation', refresher);
     console.log('recargando datos');
     this.getPos();


     setTimeout(() => {
       console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
   }




}
