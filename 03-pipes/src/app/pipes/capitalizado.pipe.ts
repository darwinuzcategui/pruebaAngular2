import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

  transform(value: string  ): string {
//  con el operador red que son ...  transform(value: string, ...args: any[] ): string {
// con los argumento cada uno      transform(value: string, args1, args2, args3 ): string {


    // console.log(value);
    // console.log(args1);
    // console.log(args2);
    value = value.toLowerCase();

    let nombres = value.split(" ");


    for( let i in nombres ) {
      nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }


     return nombres.join(" ");
  }
}
