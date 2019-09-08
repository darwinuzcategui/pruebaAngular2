import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../servicios/deseos.service';
import { Lista } from "../../modelos/lista.modelo";
import { ListaItem } from "../../modelos/lista-item.modelo";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  
  lista: Lista;
  nombreItem = '';


  constructor ( private deseoService: DeseosService,
                private rutaActiva: ActivatedRoute) { 

      const listaId = this.rutaActiva.snapshot.paramMap.get('idLista');
       console.log(listaId);
      this.lista = this.deseoService.obtenerLista(listaId);
       console.log(this.lista);
      

      

  }

  ngOnInit() {
  }

  agregarItem() {
    if(this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );
    this.nombreItem = '';
    this.deseoService.guardarStorage();
  }
  cambiocheckbox( item: ListaItem ) {
    console.log(item);

    const pendientes = this.lista.items
                            .filter(itemDatos => !itemDatos.completado )
                            .length;

    if(pendientes === 0 ){
      this.lista.termindaEn = new Date();
      this.lista.terminada = true;
    } else{
      this.lista.termindaEn = null;
      this.lista.terminada = false;
    }


    console.log( { pendientes } );
    





    this.deseoService.guardarStorage();
    console.log(this.deseoService.listas);
    
    

  }

}
