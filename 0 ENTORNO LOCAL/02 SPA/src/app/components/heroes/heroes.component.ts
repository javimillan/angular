import { Component, OnInit } from '@angular/core';
// Importamos el servicio "HeroesService" y la interfaz "Heroe"
import { HeroesService , Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  //Inicializamos variables y arrays
  //Array de datos
  heroes:Heroe[] = [];

  // Lo primero que carga la pagina
  constructor( private _heroesService:HeroesService,
               private _ruta:Router
              ) {
  console.log("-constructor-");
  }

  // Cuando la pagina ya está cargada
  ngOnInit() {
    console.log("-ngOnInit-");

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(idx:number){
    console.log("INDICE: " + idx);
    this._ruta.navigate( ['/heroe', idx] );
  }

}
