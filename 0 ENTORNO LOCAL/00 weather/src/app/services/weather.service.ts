import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';// para los operadores map

@Injectable()
export class WeatherService {

  // artistas:any[] = [];
  // artista:string = "";

  constructor(public http:HttpClient) {
    console.log("Servicio de weather listo!");
  }

  localizacion:any[] = [];
  nombre:string = "";
  temp:string = "";
  respuesta:any[] = [];
  respuestaForecast:any[] = [];

  getTiempoForecast(ciudad:string){
    let url = `http://api.wunderground.com/api/e276774f8069a33e/forecast/geolookup/conditions/q/ES/${ciudad}.json`;

    return this.http.get(url)
                .map((resp:any) => resp.forecast.simpleforecast.forecastday[0].high)
                .subscribe( respuestaForecast => {
                  console.log( "-respuesta FORECAST-" );
                  console.log( respuestaForecast );
                  this.respuestaForecast = respuestaForecast;
                  console.log("forecast/global service");
                  console.log(this.respuestaForecast);
                  return this.respuestaForecast;
                  // this.nombre = respuesta.display_location.full;
                  // this.temp = respuesta.temp_c;
                  // // // return this.temp;
                  // console.log(this.temp);
                  // console.log(this.nombre);


                });
}

  getTiempo(ciudad:string){
    // let url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=ES`;
    let url = `http://api.wunderground.com/api/e276774f8069a33e/forecast/geolookup/conditions/q/ES/${ciudad}.json`;

    return this.http.get(url)
                .map((resp:any) => resp.current_observation)
                .subscribe( respuesta => {
                  console.log( "-respuesta-" );
                  console.log( respuesta );
                  this.respuesta = respuesta;

                  // return this.localizacion;
                        // console.log("-CIUDAD-");
                        // this.city = localizacion.city;
                        // // return this.city;
                        // console.log(this.city);


                  // console.log("-TEMPERATURA-");
                  this.nombre = respuesta.display_location.full;
                  this.temp = respuesta.temp_c;
                  // // return this.temp;
                  console.log(this.temp);
                  console.log(this.nombre);


                });



}

}
