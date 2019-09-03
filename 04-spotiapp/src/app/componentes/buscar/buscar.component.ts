import { Component } from '@angular/core';
import { SpotyfyService } from '../../servicios/spotyfy.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

  artistas: any[] =[];
<<<<<<< HEAD
  cargando:boolean;

  constructor(private spotyfy: SpotyfyService ) { }

  buscar(terminoBusqueda: string ) {
    this.cargando = true;
    console.log(terminoBusqueda);
    this.spotyfy.getArtistas( terminoBusqueda )
    .subscribe( (datos:any) => {
      console.log(datos);
      this.artistas =datos;
      this.cargando= false;
=======

  constructor(private spotyfy: SpotyfyService ) { }
  buscar(terminoBusqueda: string ) {
    console.log(terminoBusqueda);
    this.spotyfy.getArtistas( terminoBusqueda )
    .subscribe( (datos:any) => {
      console.log(datos.artists.items);
      this.artistas =datos.artists.items;
>>>>>>> refs/remotes/origin/master

    });
  }

}
