import { Injectable } from '@angular/core';
import { Lista } from '../modelos/lista.modelo';

@Injectable({
  providedIn: 'root'
})
export class DeseosService { 

  listas: Lista[] = [];

  

  constructor() { 
    console.log('servicio inicializado');
    this.cargarStorage();
    // const lista1 = new Lista('Hacer Primera Tarea');
    // const lista2 = new Lista('Hacer segunda Tarea');

    // this.listas.push(lista1, lista2);
    
   // console.log(this.listas);

    
  }

  crearLista (titulo: string ) {
    const nuevaLista = new Lista(titulo);
    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
    
  }

  obtenerLista(id: string | number){
   
    
    id = Number(id);
   
    
    
     return this.listas.find( listaDatos => listaDatos.id === id );
  }

  // metodo para guarda en local storage
  guardarStorage() {

    localStorage.setItem('datosLOCALSTORAGE', JSON.stringify(this.listas) );
  
  }

  cargarStorage() {

    if ( localStorage.getItem('datosLOCALSTORAGE') ) {

      this.listas = JSON.parse( localStorage.getItem('datosLOCALSTORAGE') );
      
    } else {
      this.listas = [];
    }

   
  }
}
