import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artista:any = {};
  pistas: any[] = [];

  constructor(private _ruta:ActivatedRoute, public _spotify:SpotifyService) {

  }

  // Se ejecuta cuando ya está inicializado el componente
  ngOnInit() {

  this._ruta.params
        .map( params => params['id'] )
        .subscribe( id => { // nos subscribimos a los observables para escuchar cualquier data que se envie a través de el

          console.log( id );
          this._spotify.getArtista( id )
                    .subscribe( artista => { // nos subscribimos a los observables para escuchar cualquier data que se envie a través de el
                      console.log( artista );
                      this.artista = artista;
                    });

          this._spotify.getTop( id )
                .map( (resp:any) => resp.tracks )
                .subscribe( pistas => { // nos subscribimos a los observables para escuchar cualquier data que se envie a través de el
                  console.log( pistas );
                  this.pistas = pistas;
                });


        });

}
}
