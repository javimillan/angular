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


  ngOnInit() {}

  consultaData(){
    console.log("1111");

    let url:any = `http://api.wunderground.com/api/${this.key}/forecast/geolookup/conditions/q/CA/${this.city}.json`;
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
        this.dataResult = "-Existen varias coincidencias-";
      }
      else{
          // --------- 1 resultado
          if(resp.current_observation != undefined){
            console.log(resp.current_observation.display_location.full);
            this.dataResult = resp.current_observation.display_location.full;
          }
          // -------- no hay resultados
          else{
            console.log("ERROR");
            this.dataResult = "-No existen coincidencias-";
          }
      }
    });
  }
}
