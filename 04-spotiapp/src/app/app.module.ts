import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/compartida/navbar/navbar.component';

// importar las rutas
import { RUTAS } from './app-routing.module';
import { PaisesEjemploHttpComponent } from './componentes/paises-ejemplo-http/paises-ejemplo-http.component';
// Servicios
// import { SpotyfyService } from './servicios/spotyfy.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent,
    PaisesEjemploHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( RUTAS,  { useHash: true } )
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
