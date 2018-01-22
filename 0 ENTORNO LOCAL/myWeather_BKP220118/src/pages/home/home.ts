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

this.getPos();
                // .subscribe(data => {
                //     console.log("data");
                //     console.log(data);
                // });

    // .map( (resp:any) => resp.coords )
    // .subscribe(data => {
    //   console.log("RESP")
    //   console.log(data)
    // });

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
    }

    getPos(){
      this._geolocation.getCurrentPosition()
      .then(res => {

        this.lat = res.coords.latitude
        this.lon = res.coords.longitude

          let url = `http://api.wunderground.com/api/${this.key}/forecast/geolookup/conditions/q/${this.lat},${this.lon}.json`;
          // Observable al que nos debemos subscribir
          // Los observables no se disparan hasta que no nos subscribimos a ellos
          // console.log(this._http.get(url));
          this._http.get(url)
          .subscribe(data => {
            console.log(data)
            this.temp = data.current_observation.temp_c;
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


    // getData(){
    //   console.log("this._myWeather.getURL");
    //   this._myWeather.getURL().subscribe(resp => {
    //     console.log(resp)
    //   });
    //
    //   }


//     getData(){
//
//       this._myWeather._geolocation.getCurrentPosition().then((pos) => {
//
//       this.lat = pos.coords.latitude;
//       this.lon = pos.coords.longitude;
//       console.log("pos");
//
//       console.log(this.lat);
//       this._myWeather.getURL(this.lat, this.lon, this.key)
//       .subscribe( resp => {
//       console.log(resp);
//       this.temp = resp.current_observation.temp_c;
//       this.tempMax = resp.forecast.simpleforecast.forecastday["0"].high.celsius;
//       this.tempMin = resp.forecast.simpleforecast.forecastday["0"].low.celsius;
//       this.lastHour = resp.current_observation.local_time_rfc822;
//       this.lastHourSplit = this.lastHour.split(" ")[4];
//       this.city = resp.current_observation.display_location.city;
//       this.dateDay = resp.forecast.simpleforecast.forecastday["0"].date.day;
//
//       this.dateMonth = resp.forecast.simpleforecast.forecastday["0"].date.month;
//       if(this.dateMonth < 10){
//         this.dateMonth = "0" + this.dateMonth;
//       }
//       this.dateYear = resp.forecast.simpleforecast.forecastday["0"].date.year;
//
//  });
//
//  });
//
// }



  //
  // doRefresh(refresher) {
  //    console.log('Begin async operation', refresher);
  //    console.log('recargando datos');
  //    this.getData();
  //
  //
  //    setTimeout(() => {
  //      console.log('Async operation has ended');
  //      refresher.complete();
  //    }, 2000);
  //  }




}
