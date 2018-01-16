import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  //variable local
  heroe:any = {};

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
              ) {
                  this._activatedRoute.params.subscribe( params => {
                    console.log("PARAMS: " + params['id']);
                    this.heroe = this._heroesService.getHeroe(params['id']);
                    console.log(this.heroe);
                  });
              }

  ngOnInit() {
  }

}
