import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotyfyService {


  constructor(private http: HttpClient) {

      console.log('servicio iniciado');
   }

   getQuery( query: string ){
     const  URL = `https://api.spotify.com/v1/${ query } `;
     const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQA_C5mnXlW_Xuz4dzb5ONTBO_FqVUVr2zognlA10z33xxAtkxzOhpXbuprMEFZv-vZrIMYqO3WDGZFH_jp_RXT0cGI1Uj2KunX2QTu5jYt1nacEs40eTgSUwtkBBkDjpVGAuk150_JmAgvOvhlnuGnW3HiwFyyBupM53AanhW6Qa0cINKnKB6jC56beLgGRMJUUH7lt8TeiI1s'
    });

     return this.http.get(URL, {headers});


   }

   getNuevoLansamientoSpotyfy(){

     return this.getQuery('browse/new-releases?limit=19')
      .pipe ( map ( datos => datos['albums'].items));
  }


  /*
  // FUNCION VIEJA SE OPTIMISO
   getNuevoLansamientoSpotyfy(){
     //const ENCABEZADOS = new HttpHeaders({

     //  'Authorization': 'Bearer  BQDMJseIaPev15kBVzuiCVX8A0VewxlRcKeuKxqADE1JuBx4ccFmRhvWDOUfWNkNuYf70IFWTbcBpD4gKT4'
    // });
     const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      'Authorization': 'Bearer BQA9VK27LW-0m6Kq-ty9t8yjKVUogC50urn4BtuBNw2g5ZdgZyqrbGWJbLNIXJ4_RaCT2Kd_rxlyNM-qLfvnee3bFFqsnS7zY5u_mIIvscZVqu6Ka7HqbXcwGRbAYcG5f0rlTDgZ6tNbKk_QqSj7rpu3IP2Wpe6M5LZuNVWIU1VT4ZtQkPSFFhIcvcRZJZzxuVAh'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=19', { headers })
     .pipe ( map ( datos => datos['albums'].items));
    //  .subscribe( datos => {
    //    console.log(datos);
//
  //    });

   }


   getArtistas(termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA9VK27LW-0m6Kq-ty9t8yjKVUogC50urn4BtuBNw2g5ZdgZyqrbGWJbLNIXJ4_RaCT2Kd_rxlyNM-qLfvnee3bFFqsnS7zY5u_mIIvscZVqu6Ka7HqbXcwGRbAYcG5f0rlTDgZ6tNbKk_QqSj7rpu3IP2Wpe6M5LZuNVWIU1VT4ZtQkPSFFhIcvcRZJZzxuVAh'
    });

     return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers })
    //  .subscribe( datos => {
    //    console.log(datos);
    .pipe ( map (datos => datos['artists'].items));      //this.artistas =datos.artists.items;

//

   }

   */

   getArtistas(termino: string ){

      return this.getQuery(`search?q=${ termino }&type=artist`)
       .pipe ( map (datos => datos['artists'].items));
   }

   getUnArtista( id: string ) {

    //GET https://api.spotify.com/v1/artists/{id}
    return this.getQuery(`artists/${ id }`);
     //.pipe ( map (datos => datos['artists'].items));
 }

}
