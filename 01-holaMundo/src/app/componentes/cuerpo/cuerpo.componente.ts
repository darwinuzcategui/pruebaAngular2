import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.componente.html'

})
export class CuerpoComponente{

  mostrar = true;


  frase: any = {
    mensaje: 'Pagina para primer curso de Angular y desde cero hasta experto.....',
    autor: 'Darwin Felipe Uzcategui'

  };

  listaArreglo: string[] = [
    'Facturación',
    'Nómina',
    'Administración'
  ];


}
