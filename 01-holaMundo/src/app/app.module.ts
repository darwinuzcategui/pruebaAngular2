import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezasoComponente } from './componentes/encabezado/encabezado.componente';
import { CuerpoComponente } from './componentes/cuerpo/cuerpo.componente';
import { PieComponent } from './componentes/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezasoComponente,
    CuerpoComponente,
    PieComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
