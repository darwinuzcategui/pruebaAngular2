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
     //const ENCABEZADOS = new HttpHeaders({
       
     //  'Authorization': 'Bearer  BQDMJseIaPev15kBVzuiCVX8A0VewxlRcKeuKxqADE1JuBx4ccFmRhvWDOUfWNkNuYf70IFWTbcBpD4gKT4'
    // });
     const headers = new HttpHeaders({
      'Authorization': 'Bearer  BQC1_Sz3u9MYbNC9Z9ISw_RbAnuAssGOOWq_9jRyZ5ow0BaNO7g0NEsSJjsO8HUETU93IcdBNTi5-MA_TYc'
    });

     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=19', { headers });
    //  .subscribe( datos => {
    //    console.log(datos);
//
  //    });
     
   }
   getArtistas(termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer  BQC1_Sz3u9MYbNC9Z9ISw_RbAnuAssGOOWq_9jRyZ5ow0BaNO7g0NEsSJjsO8HUETU93IcdBNTi5-MA_TYc'
    });

     return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers });
    //  .subscribe( datos => {
    //    console.log(datos);
//

   }

}
