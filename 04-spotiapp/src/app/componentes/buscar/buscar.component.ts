import { Component } from '@angular/core';
import { SpotyfyService } from '../../servicios/spotyfy.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

  artistas: any[] =[];

  constructor(private spotyfy: SpotyfyService ) { }
  buscar(terminoBusqueda: string ) {
    console.log(terminoBusqueda);
    this.spotyfy.getArtistas( terminoBusqueda )
    .subscribe( (datos:any) => {
      console.log(datos.artists.items);
      this.artistas =datos.artists.items;

    });
  }

}
