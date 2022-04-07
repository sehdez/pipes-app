import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  
  //i18nSelect
  nombre: string = "Sergio";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  clientes:string[] = ["Sergio", "María","Juan", "Esmeralda", "Patricio"] ;
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarGenero(){
    if(this.nombre ==='Sergio'){
      this.nombre = 'Briseyda';
      this.genero = 'femenino'
    }else{
      this.nombre = 'Sergio';
      this.genero = 'masculino'
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  persona = {
    'Nombre':'Sergio Hernández',
    'edad': '27',
    'dirección': 'Loma Jazmín #35'
  }

  artistas = [
    {
      'nombre': 'Axel Rose',
      'vive': 'false'
    },
    {
      'nombre': 'Facundo Cabral',
      'vive': 'false'
    },
    {
      'nombre': 'Luis Miguel',
      'vive': 'true'
    }
  ]
  // Async Pipe
  miObservable = interval(1000);//0,1,2,3,4,5,6...
  // Hacer una Promesa
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Promesa cargada con éxito' );
    }, 6000 );
  });


}
