import { Component} from '@angular/core';

@Component({
  selector: 'app-prueba-mascotas',
  templateUrl: './prueba-mascotas.component.html',
  styleUrls: ['./prueba-mascotas.component.scss']
})
export class PruebaMascotasComponent {
  title = 'Registro animales'; 
  nombreAnimal= ''; 
  animales = []; 
  //fuction-metodo 
  agregarAnimal(){ 
    //console.log("agregandoAnimal", this.nombreAnimal) 
    //this.animales.push(this.nombreAnimal) 
    if (this.nombreAnimal !== '') { 
      this.animales.push(this.nombreAnimal); 
      this.nombreAnimal= ''; 
    }else { 
      alert('Debes agregar el nombre del animal'); 
    } 
  } 

  removerAnimal(i){ 
    this.animales.splice(i , 1) 
  }
}
