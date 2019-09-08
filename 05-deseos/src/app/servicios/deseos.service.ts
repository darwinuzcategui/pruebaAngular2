import { Injectable } from '@angular/core';
import { Lista } from '../modelos/lista.modelo';

@Injectable({
  providedIn: 'root'
})
export class DeseosService { 

  listas: Lista[] = [];
  

  constructor() { 
    // console.log('servicio inicializado');
    const lista1 = new Lista('Hacer Primera Tarea');
    const lista2 = new Lista('Hacer segunda Tarea');

    this.listas.push(lista1, lista2);
    
   // console.log(this.listas);

    
  }
}
