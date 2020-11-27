import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './componentes/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { PruebaMascotasComponent } from './componentes/prueba-mascotas/prueba-mascotas.component';
import { InisiarSesionComponent } from './componentes/inisiar-sesion/inisiar-sesion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CompraPorIdComponent } from './componentes/compra-por-id/compra-por-id.component';
import { ProductoPorIdComponent } from './componentes/producto-por-id/producto-por-id.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ComprasComponent } from './componentes/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaMascotasComponent,
    InisiarSesionComponent,
    ContactoComponent,
    PaginaNoEncontradaComponent,
    RegistroComponent,
    InicioComponent,
    CompraPorIdComponent,
    ProductoPorIdComponent,
    CarritoComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
