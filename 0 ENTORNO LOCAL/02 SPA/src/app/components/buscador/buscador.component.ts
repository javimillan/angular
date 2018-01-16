import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  termino:string;

  constructor(
      private _activatedRoute:ActivatedRoute,
      private _heroesService:HeroesService
     ) {
    console.log("-constructor Search-");


   }

  ngOnInit() {
    console.log("-ngOnInit Search-");
    //leer termino y ejecutar funcion buscarHeroes
    this._activatedRoute.params.subscribe( params => {
      console.log("PARAMS: " + params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      });


  }

}
