import { Component } from '@angular/core';
import { DeseosService } from '../../servicios/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseoSevice: DeseosService,
               private rutas: Router, 
               private alertaCtlr: AlertController) {

               }
 async agregarLista() {

   // this.rutas.navigateByUrl('/tabs/tab1/agregar');
  
  //  const alert = await this.alertaCtlr.create({
    const alert = await this.alertaCtlr.create({
      header: 'Nueva Lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('se pulso cancelar');
          }
        },
        {
          text: 'Crear',
          handler:(datos) =>{
            console.log(datos);
            if (datos.titulo.length === 0 ){
              return;
            }
            // Aqui Crear la Lista
            // cuando se tiene datos
            const idLista = this.deseoSevice.crearLista( datos.titulo );
            
            this.rutas.navigateByUrl(`/tabs/tab1/agregar/${ idLista }`);
            
          } 
        }
      ]
    });

   // await alert.present();
   alert.present();
  }             

}
