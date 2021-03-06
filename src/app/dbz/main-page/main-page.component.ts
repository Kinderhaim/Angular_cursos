import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes:Personaje[]= [ {
    nombre: 'Goku', 
    poder: 15000, 
    origen: 'Sayayin' }, 

    { nombre: 'Vegeta', 
    poder: 16000, 
    origen: 'Sayayin'
    }
  ]
  
  nuevo:Personaje = {
    nombre:'' ,
    poder : 0 ,
    origen:''
  }
  agregar(){
    if (this.nuevo.nombre.trim().length===0){return;}

    console.log(this.nuevo)
    this.personajes.push(this.nuevo); 
    this.nuevo={nombre:'',poder:0,origen:''}
  }

 



}
