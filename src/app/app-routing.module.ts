import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InisiarSesionComponent } from './componentes/inisiar-sesion/inisiar-sesion.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CompraPorIdComponent } from './componentes/compra-por-id/compra-por-id.component';
import { ProductoPorIdComponent } from './componentes/producto-por-id/producto-por-id.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ComprasComponent } from './componentes/compras/compras.component';


const routes: Routes = [
    {
        path: '', // http://localhost:4200 nos redireccionara a iniciocuando no hay una ruta identificada o este vacio
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inisiarSesion',// http://localhost:4200/inisiarSesion
        //componenetes que va abrir
        component:InisiarSesionComponent
    },
    {
        path: 'contacto',// http://localhost:4200/contacto
        component:ContactoComponent
    },
    {
        path: 'inicio',// http://localhost:4200/inicio
        //componenetes que va abrir
        component:InicioComponent
    },
    {
        path: 'registro',// http://localhost:4200/registro
        component:RegistroComponent
    },
    {
        path: 'carrito',// http://localhost:4200/inisiarSesion
        //componenetes que va abrir
        component:CarritoComponent
    },
    {
        path: 'compras/:id',// http://localhost:4200/compras/
        component: CompraPorIdComponent
    },
    {
        path: 'compras',// http://localhost:4200/compras
        component: ComprasComponent
    },
    {
        path: 'producto/:id',// http://localhost:4200/producto/
        component: ProductoPorIdComponent
    },
    // para caundo no se encuentre la ruta, se encarge de renderizar 
    {
        path: '**',
        component: PaginaNoEncontradaComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}