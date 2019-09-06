import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfyService } from '../../servicios/spotyfy.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artistaUnObjeto: any = {};
  topCanciones: any = [];
  cargando: boolean;

  constructor(
    private rutasActiva: ActivatedRoute,
    private spotyfy: SpotyfyService
  ) {
    this.cargando = true;
    this.rutasActiva.params.subscribe(parametrosrecibido => {
      // console.log(parametrosrecibido['id']);
      // llamo la funcion
      this.getArtista(parametrosrecibido[ 'id']);
      this.getTopCanciones(parametrosrecibido[ 'id']);
    });
  }

  getArtista(id: string) {
    this.cargando = true;
    this.spotyfy.getUnArtista(id).subscribe(artista => {
      console.log(artista);
      this.artistaUnObjeto = artista;
      this.cargando = false;
    });
  }

  getTopCanciones(id: string ) {
    this.spotyfy.getTopCanciones(id)
    .subscribe( topeCanciones => {

      this.topCanciones = topeCanciones;
      console.log(topeCanciones);

    });


  }
}
