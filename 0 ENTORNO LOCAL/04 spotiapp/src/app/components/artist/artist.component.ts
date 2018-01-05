import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  cantante:any = {};
  topTracks:any[] = [];
  constructor(private _ruta:ActivatedRoute, public _spotify:SpotifyService) { }

  // Se ejecuta cuando ya está inicializado el componente
  ngOnInit() {

    this._ruta.params
      .map(parametros => parametros['id'])
      .subscribe( id => {
        console.log(id);
        this._spotify.getArtista(id)
                          .subscribe(artista => {
                            console.log(artista);
                            this.cantante = artista;
                          });

        this._spotify.getTop(id)
                          .subscribe(top => {
                            console.log(top);
                            this.topTracks = top.tracks;
                            console.log(this.topTracks);
                          });

  });

}
}
