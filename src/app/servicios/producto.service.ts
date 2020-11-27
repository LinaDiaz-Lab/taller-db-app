import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
//import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  obtenerProducto () {
    //return fetch('http://localhost:2500/productos')
    return this.http.get<[]>(`${environment.API_URL}/productos`)// consultaa la API sobre los productos
  }
}
/**
 * Metodo 1 angular si utilizamos con fetch
  obtenerProducto () {
    fetch('http://localhost:2500/productos').then((response) => response.json()).then((datos) => console.log(datos)).catch((error) => console.error('Error trayendo los datos',Error))
  }
 * Metodo 2 angular si utilizamos con fetch
  obtenerProducto () {
    return fetch('http://localhost:2500/productos')
  }
 * 
 */