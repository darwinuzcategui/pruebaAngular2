import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotyfyService {


  constructor(private http: HttpClient) {

      console.log('servicio iniciado');
   }

   getNuevoLansamientoSpotyfy(){
     //const encabezados = new HttpHeaders({
       // tslint:disable-next-line:object-literal-key-quotes
     //  'Authorization': 'Bearer  BQDMJseIaPev15kBVzuiCVX8A0VewxlRcKeuKxqADE1JuBx4ccFmRhvWDOUfWNkNuYf70IFWTbcBpD4gKT4'
    // });
     const headers = new HttpHeaders({
      'Authorization': 'Bearer  BQDMJseIaPev15kBVzuiCVX8A0VewxlRcKeuKxqADE1JuBx4ccFmRhvWDOUfWNkNuYf70IFWTbcBpD4gKT4'
    });

     this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( datos => {
        console.log(datos);

      });
     
   }

}
