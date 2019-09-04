import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent  {

  @Input() items: any[] = [];
  constructor( private rutas: Router ) { }

  verUnArtista (item: any ) {
    let artistaId: string;

    if (item.type === 'artist') {
      artistaId = item.id;

    } else {
      artistaId = item.artists[0].id;

    }

    this.rutas.navigate([ '/artista', artistaId ]);


    console.log( artistaId );



  }



}
