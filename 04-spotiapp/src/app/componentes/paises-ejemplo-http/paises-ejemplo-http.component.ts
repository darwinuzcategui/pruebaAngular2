import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises-ejemplo-http',
  templateUrl: './paises-ejemplo-http.component.html'

})
export class PaisesEjemploHttpComponent implements OnInit {

  paisesPropiedadDeLaClases: any[] = [];

  constructor( private http: HttpClient ) {
    console.log('contructor llamando con la peticion get');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (paisesRespuestadelGet: any) => {
      this.paisesPropiedadDeLaClases = paisesRespuestadelGet;
      console.log(paisesRespuestadelGet);
    });
   }

  ngOnInit() {
  }

}
