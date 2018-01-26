import { Component } from '@angular/core';
import { AgregarComponent} from '../agregar/agregar.component';
import { HttpClient } from '@angular/common/http';
import { myWeatherService } from '../../services/myWeather.service';
import { dataManagementService } from '../../services/dataManagement.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  ubicacionesArray:any[];
  key:any= "e276774f8069a33e";
  listasTemp:any[];

  resultsCity:any;
  resultsTemp:any;
  resultsTempMax:any;
  resultsTempMin:any;
  resultsStatus:any;
  resultsLocation:any;


  constructor(public _http:HttpClient, public _myWeather: myWeatherService, public navCtrl: NavController, public _dataService: dataManagementService) {

    this.refreshUbicaciones();
    this._dataService.cargarData();

    this.ubicacionesArray = this._dataService.listas;


  }



  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }


  refreshUbicaciones = () => {
    console.log("this._dataService.listas.length");
    console.log(this._dataService.listas.length);
    this._dataService.listasTemp = this._dataService.listas.slice();
    console.log("this._dataService.listas");
    console.log(this._dataService.listas.length);
    console.log(this._dataService.listas.toString());
    console.log(this._dataService.listas);
    this._dataService.listas = [];
    console.log(typeof this._dataService.listas)
    this._dataService.listasTemp.forEach((item) => {
      let url:any = `http://api.wunderground.com/api/e276774f8069a33e/forecast/geolookup/conditions${item[5]}.json`;
      console.log(url);
        this._http.get(url)
          .subscribe((resp:any) => {
            console.log(resp);

            this.resultsCity = resp.current_observation.display_location.city;
            this.resultsTemp = resp.current_observation.temp_c + " ºC";
            this.resultsTempMax = resp.forecast.simpleforecast.forecastday["0"].high.celsius + " ºC";
            this.resultsTempMin = resp.forecast.simpleforecast.forecastday["0"].low.celsius + " ºC";
            this.resultsStatus = resp.forecast.simpleforecast.forecastday["0"].conditions;
            this.resultsLocation = resp.location.l;
            this._dataService.listas.push([this.resultsCity, this.resultsTemp, this.resultsTempMax, this.resultsTempMin, this.resultsStatus, this.resultsLocation]);

          });

        });




        console.log(typeof this._dataService.listas)

      console.log("this._dataService.listas");
      console.log(this._dataService.listas.length);
      console.log(this._dataService.listas.toString());
      console.log(this._dataService.listas);
      // this._dataService.listas = [];
      // this._dataService.listas.push(this._dataService.listasTemp);
      // this._dataService.listas.shift();
      this._dataService.actualizarData();
      // this._dataService.cargarData();

  }

  doRefresh(refresher) {
     console.log('Begin async operation', refresher);
     console.log('recargando datos');
     // this.getPos();
     this.refreshUbicaciones();
     setTimeout(() => {
       console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
   }


}
