import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';






const RUTAS: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_RUTIANDO = RouterModule.forRoot(RUTAS);
// para colocar con hasg , { useHash:false }
// aqui con has export const APP_RUTIANDO = RouterModule.forRoot(RUTAS, { useHash:false });
