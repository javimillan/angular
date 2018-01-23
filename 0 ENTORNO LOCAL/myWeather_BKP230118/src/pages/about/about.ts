import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarComponent} from '../agregar/agregar.component';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  ubicacionesArray:any[];

  constructor(public navCtrl: NavController) {


    this.ubicacionesArray = [
      {
        name:"Cubelles",
        temp:"20.7",
        hour:"20",
        tempMax:"22",
        tempMin:"3",
        status:"clear"
      },
      {
        name:"Viladecans",
        temp:"20.7",
        hour:"20",
        tempMax:"22",
        tempMin:"3",
        status:"cloudy"
      },
      {
        name:"Calafell",
        temp:"20.7",
        hour:"20",
        tempMax:"22",
        tempMin:"3",
        status:"rain"
      },


    ];

  }

  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }

}
