import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../servicios/spotyfy.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'

})
export class InicioComponent  {

  nuevasCanciones: any[] = [];
<<<<<<< HEAD
  cargando: boolean;



  constructor( private servicioUtilizadoInicio: SpotyfyService ) {

    this.cargando =  true;
    this.servicioUtilizadoInicio.getNuevoLansamientoSpotyfy()
    .subscribe( (datos: any) => {
      console.log(datos);
      //this.nuevasCanciones = datos.albums.items;
        this.nuevasCanciones = datos;
        this.cargando = false;

=======

 

  constructor( private servicioUtilizadoInicio: SpotyfyService ) { 
    this.servicioUtilizadoInicio.getNuevoLansamientoSpotyfy()
    .subscribe( (datos: any) => {
      console.log(datos.albums.items);
      this.nuevasCanciones = datos.albums.items;
>>>>>>> refs/remotes/origin/master
    });
   }

  }
