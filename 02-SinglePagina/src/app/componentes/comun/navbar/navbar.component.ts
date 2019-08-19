import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  })
export class NavbarComponent implements OnInit {

  constructor( private _rutas: Router) { }

  ngOnInit() {
  }

  buscarHeroes( termino:string) {
    // console.log(termino);
    this._rutas.navigate( ['/buscar', termino] );
  }

}
