import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'; // para los operadores map

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  // artista:string = "";
  //---------------------------- Actualizar cada 24h ----------------------------
  authorization:string = "BQAsT8MKd7s1JcSsrGcXwrq92hULl_Bqv8WyJ6g2Guy5Z2GK4SCtp5Vq-zaGBKI649C1Z0YefNecHQMkk6c";
  //-----------------------------------------------------------------------------

  constructor(public http:HttpClient) {
    console.log("Servicio de SPotify listo!");
  }
  getArtistas(termino:String){
      let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=50`;
      //ATENCION: El token caduca cada hora
      let headers = new HttpHeaders({
        'authorization': 'Bearer ' + this.authorization;
      })
      return this.http.get(url, {headers})
                  .map((resp:any) => {
                      this.artistas = resp.artists.items;
                      return this.artistas;
                  });

  }

  getArtista(id:string){
    let url = `https://api.spotify.com/v1/artists/${id}`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.authorization;
    })
    return this.http.get(url, {headers});
                // .map((resp:any) => {
                //   this.artista = resp;
                //     return this.artista;
                // });
  }

  getTop(id:string){
    let url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=ES`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.authorization;
    })
    return this.http.get(url, {headers});


  }


}
