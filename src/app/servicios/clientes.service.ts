import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
//estructura private + nombre de una variable + class que va definir el tipo que va a tener la variable anterior
  constructor ( private http: HttpClient ) { }

  regitrarCliente( datosUsuario = {} ){
    return this.http.post(`${environment.API_URL}/clientes`, datosUsuario )//funciona de manera asincrona, no se resibe una respuesta inmediata
  }

  obtenerContactos (){
    return this.http.get<[]>(`${environment.API_URL}/clientes`)
  }
}
