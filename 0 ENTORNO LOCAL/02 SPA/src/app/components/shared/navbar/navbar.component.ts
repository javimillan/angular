import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroesService:HeroesService,
    private _ruta:Router
  ) {
   }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    console.log("TERMINO: "+ termino);
    console.log("redirigiendo a la busqueda...: ");
    // ir a heroe-search con el termino introducido
    this._ruta.navigate( ['../../buscar', termino] );

  }


}
