import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino:string = '';


  // Inyectamos el servicio de spotify al componente. Dentro del componente se llamara _spotify
  constructor(public _spotify:SpotifyService) {}

  buscarArtista(termino:string){

  if (this.termino.length == 0) {
      return;
  }
  this._spotify.getArtistas(this.termino)
    .subscribe(artistas => {
    console.log("Informacion lista!!");
    console.log(artistas);
  })
}


}
