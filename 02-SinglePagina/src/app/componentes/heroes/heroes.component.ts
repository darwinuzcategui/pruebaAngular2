import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'

})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
 
  constructor( private _heroesServicio: HeroesService,
               private _rutas: Router ) {
    // console.log("contructor primero");


   }

  ngOnInit() {
    console.log('ngOnInit segundo');
    this.heroes = this._heroesServicio.getHeroes();
    // console.log(this.heroes );


  }

  verHeroe( idx: number ) {

    console.log(idx);
    this._rutas.navigate( ['/heroe', idx] );

  }


}


