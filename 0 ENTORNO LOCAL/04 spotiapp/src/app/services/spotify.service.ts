import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  constructor(public http:HttpClient) {
    console.log("Servicio de SPotify listo!");
  }

  getArtistas(termino:String){
      let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=20`;

      let headers = new HttpHeaders({
        'authorization': 'Bearer BQA_ygAWVNBbnEwtqV1taxURarq7ZXXF3ejmyz8eJI3v_754hCjTF3Lu2JdDKVK8L3psfa18Mjh9ApwkGgA'
      })
      return this.http.get(url, {headers})
                  .map((resp:any) => {
                    this.artistas = resp.artists.items;
                      return this.artistas;
                  });

  }

}
