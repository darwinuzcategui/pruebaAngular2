import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'

})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor( private _heroesServicio:HeroesService ) {
    console.log("contructor primero");


   }

  ngOnInit() {
    console.log("ngOnInit segundo");
    this.heroes = this._heroesServicio.getHeroes();
    console.log(this.heroes );


  }


}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
