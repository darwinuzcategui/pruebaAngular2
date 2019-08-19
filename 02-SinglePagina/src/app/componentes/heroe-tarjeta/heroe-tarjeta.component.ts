import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'

})
export class HeroeTarjetaComponent implements OnInit {

  @Input() varlocalHeroes:any= {};
  @Input() indice:number;

  constructor( private _rutas:Router) { }

  ngOnInit() {
  }

  verHeroe(){
    console.log(this.indice);
    this._rutas.navigate( ['/heroe', this.indice] );

  }

}
