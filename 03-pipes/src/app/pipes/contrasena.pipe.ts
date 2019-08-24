import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(valor: string , activar: boolean = true ): string {
    if ( activar ) {
      let salida: string = '';
      // tslint:disable-next-line:prefer-for-of
      for( let i = 0; i < valor.length; i++ ){
        salida += "-";
      }
      return salida; 
      
    } else {

      return valor;
      
    }
   
  }

}
