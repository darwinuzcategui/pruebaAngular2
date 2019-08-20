import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'

})
export class HeroeTarjetaComponent implements OnInit {

  @Input() varlocalHeroes: any = {};
  @Input() indice: number;
  @Output() heroesSelecionados: EventEmitter<number>; // deorador ouput un objeto generico

  constructor( private _rutas: Router) {
    this.heroesSelecionados = new EventEmitter(); // estoy intanciado el evento para un objeto personalizado

   }

  ngOnInit() {
  }

  verHeroe(){

    // console.log(this.indice);
     this._rutas.navigate( ['/heroe', this.indice] );
  // this.heroesSelecionados.emit(this.indice );

   }

}
