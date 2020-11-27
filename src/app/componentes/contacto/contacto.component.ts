import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service'
import { Clientes } from '../../interfaces/clientes';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  clientes: Array<Clientes> = [];

  //este es el primer metodo que se ejjecuta al cargar nuestro componente
  constructor( private clientesServicio: ClientesService) {
    this.cargarClientes()
   }

  ngOnInit(): void {
  }

  cargarClientes () {
    this.clientesServicio.obtenerContactos()
    .subscribe( (clientesConsultados) => {
      //console.log('contactos', clientesConsultados)
      this.clientes= clientesConsultados
    },
    (error) => {
      console.error('Error al intenar encontrar clientes', error)
    }
    )
  }

}
