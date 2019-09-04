import { Component } from '@angular/core';
import { SpotyfyService } from '../../servicios/spotyfy.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

  artistas: any[] = [];
  cargando: boolean;

  constructor(private spotyfy: SpotyfyService ) { }

  buscar(terminoBusqueda: string ) {
    this.cargando = true;
    console.log(terminoBusqueda);
    this.spotyfy.getArtistas( terminoBusqueda )
    .subscribe( (datos:any) => {
      console.log(datos);
      this.artistas =datos;
      this.cargando= false;
      // este es que queda

    });
  }

}
