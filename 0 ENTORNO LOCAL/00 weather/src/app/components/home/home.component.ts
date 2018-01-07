import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private _ruta:ActivatedRoute, public _weather:WeatherService) {


  }

  localizacion:any[] = [];
  nombre:string = "";
  temperatura:string = "";
  temperatura_max:string = "";
  temperatura_min:string = "";

  ngOnInit() {




  }

  buscarCiudad(ciudad:string){
    console.log("buscar ciudad");
    console.log("TEM HOME");
    console.log(this._weather);
    // console.log(this._weather.localizacion.country_name);

    // Declaracion variables
    this.temperatura = this._weather.temp;
    this.nombre = this._weather.nombre;

    this.temperatura_max = this._weather.respuestaForecast.celsius;
    // this.temperatura_min = this._weather.nombre;


    if (this.ciudad.length == 0) {
      console.log("no hay ciudad");
      return;
    }

    this._weather.getTiempo(this.ciudad);
    this._weather.getTiempoForecast(this.ciudad);

    // this.city = this._weather.city;
    // console.log("localizacion HOME!");
    // console.log(this.localizacion);


    // console.log(this._weather.respuesta.location);



  }

}
