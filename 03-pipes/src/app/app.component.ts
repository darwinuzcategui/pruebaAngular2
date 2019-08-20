import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = "Darwin";

  nombre2 = "Darwin FELIPE uzcategui GonzALez";

  arreglo =[1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Steven",
    clave:"Hombre araña",
    edad:45,
    dirrecion:{
      calle:"Calle Principal",
      casa:"23"
        },
    hobie:["juagar Beisbol","Baloncesto","natacion"]
    };

    valorDePromesa = new Promise ( ( resolve, reject )=>{
      setTimeout( ()=>resolve ('llegaron los datos'),3500 );
    })

    fecha = new Date();


}
