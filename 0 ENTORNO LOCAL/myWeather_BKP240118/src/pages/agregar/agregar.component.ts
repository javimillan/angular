import { Component, OnInit } from '@angular/core';
import { HomePage} from '../home/home';
import { HttpClient } from '@angular/common/http';
import { myWeatherService } from '../../services/myWeather.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  constructor(public _http:HttpClient, public _myWeather: myWeatherService) {  }

  city:any;
  key:any = this._myWeather.key;
  dataResult:any = "";
  results:any[];
  agregar:any = 0;
  result:any;
  zmw:any;
  temp:any;


  ngOnInit() {}

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
      // this.results = resp.response.results;
    });

  }
  selectResult(item){
    console.log("Ciudad seleccionada: " + this.result);
    console.log("Temperatura: " + this.temp);
    //Imprimimos valor en el input
    this.city = this.result;
    // limpiamos lista de resultados
    this.dataResult = "";
    this.results = [];
    this.result = "";
    this.agregar = 1;
  }
  consultaData(){
    console.log("1111");
    this.agregar = 0;

      let url:any = `http://api.wunderground.com/api/${this.key}/forecast/geolookup/conditions/q/${this.city}.json`;

    // obtenemos URL desde ZMW en caso de existir varios resultados
    // para evitar confusiones con varios resultados utilizamos el ZMW
    // http://api.wunderground.com/api/e276774f8069a33e/forecast/q/zmw:31003.1.99999.json

    console.log("url")
    console.log(url)
    console.log(this._http.get(url))
    this._http.get(url)
    .subscribe((resp:any) => {
      console.log(resp);
      this.results = resp.response.results;
      // -------- mas de 1 resultado
      if (this.results != undefined){
        console.log(this.results.length);
        this.dataResult = "- Selecciona una de las coincidencias -";
        // this.temp = resp.current_observation.temp_c;
        this.results.forEach(function (name) {
          console.log(name);
          console.log(name.city + ", " + name.country);
          console.log("ZMW");
          console.log(name.zmw);
        });
      }
      else{
          // --------- 1 resultado
          if(resp.current_observation != undefined){
            console.log(resp.current_observation.display_location.city);
            this.result = resp.current_observation.display_location.city;
            this.temp = resp.current_observation.temp_c;
            console.log(this.temp)
          }
          // -------- no hay resultados
          else{
            console.log("ERROR");
            this.dataResult = "- No existen coincidencias -";
          }
      }
    });
  }
}
