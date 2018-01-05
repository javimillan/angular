import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  // artista:string = "";

  constructor(public http:HttpClient) {
    console.log("Servicio de SPotify listo!");
  }

  getArtistas(termino:String){
      let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=50`;
      //ATENCION: El token caduca cada hora
      let headers = new HttpHeaders({
        'authorization': 'Bearer BQCrmLJ0yzunWYGdeqDzJK8i-iP3ehDF87uyFq0XhA6joeP_yRYCvOzBb7c2qg3IEPX7uP-MndBbNR39j6c'
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
      'authorization': 'Bearer BQCrmLJ0yzunWYGdeqDzJK8i-iP3ehDF87uyFq0XhA6joeP_yRYCvOzBb7c2qg3IEPX7uP-MndBbNR39j6c'
    })
    return this.http.get(url, {headers})
                // .map((resp:any) => {
                //   this.artista = resp;
                //     return this.artista;
                // });
  }

  getTop(id:string){
    let url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=ES`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCrmLJ0yzunWYGdeqDzJK8i-iP3ehDF87uyFq0XhA6joeP_yRYCvOzBb7c2qg3IEPX7uP-MndBbNR39j6c'
    })
    return this.http.get(url, {headers});
            

  }


}
