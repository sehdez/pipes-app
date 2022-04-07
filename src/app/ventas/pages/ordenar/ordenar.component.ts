import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/venta.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  tipoLetra: string = "Mayúscula";
  mayus:boolean = true;
  nombre:string = "Fernando Herrera";
  orden:string = ''
  
  constructor() { }

  cambio(){
    if (this.mayus){
      this.tipoLetra = "Mayúscula";
      this.mayus = false;
    } else{
      this.tipoLetra = "Minúscula";
      this.mayus = true;
    }
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Daredebil',
      vuela: false,
      color: Color.rojo,
    }
  ];

  cambiarOrden( valor:string ){
    this.orden = valor;
  }
  


  
}
 