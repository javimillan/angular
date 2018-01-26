import { Component, OnInit } from '@angular/core';
import { HomePage} from '../home/home';
import { AboutPage} from '../about/about';
import { HttpClient } from '@angular/common/http';
import { myWeatherService } from '../../services/myWeather.service';
import { dataManagementService } from '../../services/dataManagement.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  constructor(public _http:HttpClient, public _myWeather: myWeatherService, public navCtrl: NavController, public _dataService: dataManagementService) {



  }

  city:any;
  cityShort:any;
  key:any = this._myWeather.key;
  dataResult:any = "";
  results:any[];
  resultsCity:any;
  resultsTemp:any;
  resultsTempMax:any;
  resultsTempMin:any;
  resultsLocation:any;
  resultCity:any;
  resultTemp:any;
  resultTempMax:any;
  resultTempMin:any;
  resultLocation:any;
  agregar:any = 0;
  result:any;
  resultFull:any;
  zmw:any;
  temp:any;
  resultsStatus:any;
  resultStatus:any;

  ngOnInit() {}

  agregarItem(){
    if(this.resultsCity){
      console.log("resultS from cities");
      console.log(this.resultsCity);
      this._dataService.listas.push([this.resultsCity, this.resultsTemp, this.resultsTempMax, this.resultsTempMin, this.resultsStatus, this.resultsLocation]);
      // this._dataService.actualizarData();



    }
    else{
      console.log("result city");
      console.log(this.resultCity);
      this._dataService.listas.push([this.resultCity, this.resultTemp, this.resultTempMax, this.resultTempMin, this.resultStatus, this.resultLocation]);
      // this._dataService.actualizarData();
    }
    // this.navCtrl.push(AboutPage);
    this._dataService.actualizarData();
    // this._dataService.cargarData();
    this.navCtrl.pop();


  }

  // mas de 1 resultado
  selectResults(item){
    console.log("Ciudad seleccionada: " + item.city + ", " + item.country_name);
    console.log("Temperatura: " + item.city + ", " + item.country_name);
    //Imprimimos valor en el input
    this.city = item.city + ", " + item.country_name;
    // limpiamos lista de resultados
    this.dataResult = "";
    this.results = [];
    this.result = "";
    this.agregar = 1;
    this.zmw = item.zmw;

    let url:any = `http://api.wunderground.com/api/${this.key}/forecast/geolookup/conditions/q/zmw:${this.zmw}.json`;
    this._http.get(url)
    .subscribe((resp:any) => {
      console.log(resp);
      // variables necesarias para mostrar en listado
      this.resultsCity = resp.current_observation.display_location.city;
      this.resultsTemp = resp.current_observation.temp_c + " ºC";
      this.resultsTempMax = resp.forecast.simpleforecast.forecastday["0"].high.celsius + " ºC";
      this.resultsTempMin = resp.forecast.simpleforecast.forecastday["0"].low.celsius + " ºC";
      this.resultsStatus = resp.forecast.simpleforecast.forecastday["0"].conditions;
      this.resultsLocation = resp.location.l;




    });

  }

  //1 resultado
  selectResult(item){
    console.log("Ciudad seleccionada: " + this.result);
    console.log("Temperatura: " + this.temp);
    //Imprimimos valor en el input
    this.city = this.resultFull;
    this.cityShort = this.result;
    // limpiamos lista de resultados
    this.dataResult = "";
    this.results = [];
    this.result = "";
    this.agregar = 1;
    let url:any = `http://api.wunderground.com/api/${this.key}/forecast/geolookup/conditions/q/${this.cityShort}.json`;
    this._http.get(url)
    .subscribe((resp:any) => {
      console.log(resp);
      // variables necesarias para mostrar en listado
      this.resultCity = resp.current_observation.display_location.city;
      this.resultTemp = resp.current_observation.temp_c + " ºC";
      this.resultTempMax = resp.forecast.simpleforecast.forecastday["0"].high.celsius + " ºC";
      this.resultTempMin = resp.forecast.simpleforecast.forecastday["0"].low.celsius + " ºC";
      this.resultLocation = resp.location.l;



    });
  }

  // consulta mientras escribimos en buscador
  consultaData(){
    this.agregar = 0;
    let url:any = `http://api.wunderground.com/api/${this.key}/forecast/geolookup/conditions/q/${this.city}.json`;
    console.log("url")
    console.log(url)
    console.log(this._http.get(url))
    this._http.get(url)
    .subscribe((resp:any) => {
      console.log(resp);
      this.results = resp.response.results;
      // -------- mas de 1 resultado -------------------------------------------
      if (this.results != undefined){
        console.log(this.results.length);
        // this.dataResult = "- Selecciona una de las coincidencias -";
        this.results.forEach(function (name) {
          console.log(name);
          console.log(name.city + ", " + name.country);
          console.log("ZMW");
          console.log(name.zmw);
        });
        this.result = "";
      }
      else{
          // --------- 1 resultado ---------------------------------------------
          if(resp.current_observation != undefined){
            console.log(resp.current_observation.display_location.city);
            this.result = resp.current_observation.display_location.city;
            this.resultFull = resp.current_observation.display_location.full;
            this.temp = resp.current_observation.temp_c;
            console.log(this.temp)
            this.results = [];
          }
          // -------- no hay resultados ----------------------------------------
          else{
            console.log("ERROR");
            // this.dataResult = "- No existen coincidencias -";
          }
      }
    });
  }


}
