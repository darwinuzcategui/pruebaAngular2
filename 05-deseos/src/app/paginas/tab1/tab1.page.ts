import { Component } from '@angular/core';
import { DeseosService } from '../../servicios/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseoSevice: DeseosService,
               private rutas: Router ) {

               }
  agregarLista() {

    this.rutas.navigateByUrl('/tabs/tab1/agregar');
  }             

}
