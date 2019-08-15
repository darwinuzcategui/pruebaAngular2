import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  unSoloHeroe: any = {};

  constructor( private activateRouter: ActivatedRoute,
               private _heroesService: HeroesService
    ) {

      this.activateRouter.params.subscribe( params => {

        console.log( params [ 'id_de_la_rutas' ] );
        this.unSoloHeroe = this._heroesService.getUnHeroe( params['id_de_la_rutas']);
        console.log(this.unSoloHeroe);
        

      });

    }

  }