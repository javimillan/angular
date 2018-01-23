import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { myWeatherService } from '../../services/myWeather.service';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/Rx'; // para los operadores map (incluidos todos los modulos)
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public _http:HttpClient, public navCtrl: NavController, public _myWeather: myWeatherService, public _geolocation: Geolocation) {

    console.log("_myWeather");
    console.log(this._myWeather);
    // icons
    this.ic_moon = this._myWeather.icons[0].url;
    this.ic_viento = this._myWeather.icons[1].url;
    this.ic_humedad = this._myWeather.icons[2].url;
    this.ic_sol = this._myWeather.icons[3].url;
    this.ic_nube = this._myWeather.icons[4].url;
    this.ic_termica = this._myWeather.icons[5].url;



  } // cierre CONSTRUCTOR

    ngOnInit() {
      this._myWeather.myTime();
      this.getPos();
      // setTimeout(this.translate(), 5000);


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
            this.temp = resp.current_observation.temp_c + " ºC";
            this.tempMax = resp.forecast.simpleforecast.forecastday["0"].high.celsius + " ºC";
            this.tempMin = resp.forecast.simpleforecast.forecastday["0"].low.celsius + " ºC";
            this.lastHour = resp.current_observation.local_time_rfc822;
            this.lastHourSplit = this.lastHour.split(" ")[4];
            this.city = resp.current_observation.display_location.city;
            this.dateDay = resp.forecast.simpleforecast.forecastday["0"].date.day;
            this.dateMonth = resp.forecast.simpleforecast.forecastday["0"].date.month;
            if(this.dateMonth < 10){
              this.dateMonth = "0" + this.dateMonth;
            }
            this.dateYear = resp.forecast.simpleforecast.forecastday["0"].date.year;
            this.humedad = resp.forecast.simpleforecast.forecastday["0"].avehumidity + "%";
            this.viento = resp.current_observation.wind_kph + " kph";
            this.sTermica = resp.current_observation.feelslike_c + " ºC";

            this.tomorrow = resp.forecast.simpleforecast.forecastday[1].date.weekday_short;
            this.past_tomorrow = resp.forecast.simpleforecast.forecastday[2].date.weekday_short;
            this.past_past_tomorrow = resp.forecast.simpleforecast.forecastday[3].date.weekday_short;

            this.tomorrowMax = resp.forecast.simpleforecast.forecastday[1].high.celsius;
            this.past_tomorrowMax = resp.forecast.simpleforecast.forecastday[2].high.celsius;
            this.past_past_tomorrowMax = resp.forecast.simpleforecast.forecastday[3].high.celsius;

            this.tomorrowMin = resp.forecast.simpleforecast.forecastday[1].low.celsius;
            this.past_tomorrowMin = resp.forecast.simpleforecast.forecastday[2].low.celsius;
            this.past_past_tomorrowMin = resp.forecast.simpleforecast.forecastday[3].low.celsius;

            this.status = resp.current_observation.weather;

            this.detailsArray = [
              {
                name:"Humedad",
                url:this.ic_humedad,
                value:this.humedad
              },
              {
                name:"Viento",
                url:this.ic_viento,
                value:this.viento
              },
              {
                name:"S. térmica",
                url:this.ic_termica,
                value:this.sTermica
              }
            ];

            this.forecastArray = [
              {
                day:this.tomorrow,
                icon:this.ic_sol,
                valueMax:this.tomorrowMax,
                valueMin:this.tomorrowMin
              },
              {
                day:this.past_tomorrow,
                icon:this.ic_sol,
                valueMax:this.past_tomorrowMax,
                valueMin:this.past_tomorrowMin
              },
              {
                day:this.past_past_tomorrow,
                icon:this.ic_nube,
                valueMax:this.past_past_tomorrowMax,
                valueMin:this.past_past_tomorrowMin
              }
            ];


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
    forecastArray:any[];
    datos:any;
    ic_moon:any;
    humedad:any;
    ic_humedad:any;
    ic_sol:any;
    ic_nube:any;
    ic_termica:any;
    viento:any;
    ic_viento:any;
    sTermica:any;
    tomorrow:any;
    past_tomorrow:any;
    past_past_tomorrow:any;
    tomorrowMax:any;
    past_tomorrowMax:any;
    past_past_tomorrowMax:any;
    tomorrowMin:any;
    past_tomorrowMin:any;
    past_past_tomorrowMin:any;
    status:any;

    //CASOS translate
    /*
    "clear"
    "nt_clear"
    "nt_mostlycloudy"
    "cloudy"
    "nt_rain"
    "rain"
    "nt_partlycloudy"
    */

    // translate(){
    //   switch (this.status)
    // {
    //    case "clear":
    //     this.status = "Despejado";
    //     break;
    //    default:
    //        alert('Default case');
    // }
    // }

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
