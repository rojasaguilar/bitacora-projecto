import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/Home/Home.component';
import { appRoutingProviders, routing } from './app.routing';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { CodigoComponent } from './componentes/codigo/codigo.component';
import { ServidorComponent } from './componentes/servidor/servidor.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TecnologiasComponent,
    CodigoComponent,
    ServidorComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
