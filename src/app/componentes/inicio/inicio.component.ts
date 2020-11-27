import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  productos: Array<Producto> = [];

  constructor(private servicioProductos: ProductoService) {
    this.cargarProductos()
   }

  ngOnInit(): void {
    this.cargarProductos ()
  }

  cargarProductos() {
    this.servicioProductos.obtenerProducto()//directamente no me devuelve los resultados
    .subscribe(
      (productosConcultados) => {
        this.productos = productosConcultados
      },
      (error) => {
        console.error('Error trayendo los productos', error)
      }
    )
  }

}
