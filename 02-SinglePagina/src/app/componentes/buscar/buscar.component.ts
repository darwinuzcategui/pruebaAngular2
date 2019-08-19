import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'

})
export class BuscarComponent implements OnInit {

  heroesLocal:any[] = [];
  termino:string;


  constructor( private activadorRuta: ActivatedRoute,
               private _heroesServicio: HeroesService ) { }

  ngOnInit() {

    this.activadorRuta.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroesLocal = this._heroesServicio.buscarHeroesServicio( params['termino']);
      console.log(this.heroesLocal);
    });

  }

}
