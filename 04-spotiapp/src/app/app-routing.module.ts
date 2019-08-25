import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { PaisesEjemploHttpComponent } from './componentes/paises-ejemplo-http/paises-ejemplo-http.component';




export const RUTAS: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'buscar', component: BuscarComponent},
    { path: 'paises', component: PaisesEjemploHttpComponent},
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
  ];
  // tslint:disable-next-line:no-trailing-whitespace
