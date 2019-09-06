import { Injectable } from '@angular/core';
import { Lista } from '../modelos/lista.modelo';

@Injectable({
  providedIn: 'root'
})
export class DeseosService { 

  listas: Lista[] =[];
  

  constructor() { 
    console.log('servicio inicializado');
    
  }
}
