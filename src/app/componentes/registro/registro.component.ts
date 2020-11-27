import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ClientesService } from '../../servicios/clientes.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formularioDeRegistro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService
    ) { 
    this.formularioDeRegistro = this.formBuilder.group({
      username: ['', Validators.required],
      direction: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],//, Validators.email
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registroUsuario () {
    console.log('this.formularioDeRegistro', this.formularioDeRegistro)
    //con value ya a la informacion dada le dan un formato objeto, y con valid nos mostrara si es valido o no(false, true)
    if (this.formularioDeRegistro.valid) {
      this.clientesService.regitrarCliente(this.formularioDeRegistro.value)//atraves del cliente servicio se enviara los datos a nuestro API local
      .subscribe(//nos va avisar si saio bien o no
        (respuesta) => {// si sale bien
          console.log('Success to register client', respuesta)
        },
        (error) => {//si sale mal
          console.error('Error to rigister client', error)

          const campos = Object.keys(error.errors)

          campos.forEach((campo) => {
            alert(error.error.errors[campo].message)
          })//mostrara el error o inconvenencia, un ejemplo seria que la contraseña debe ser unica
          
          /*alert(error.errors.message)
          alert(error.errors[0].message)*/
        }
      )
    }else {
      alert('You have to full all the spaces')
    }

    document.querySelector('form').classList.add('was-validated')
    
  }
}
