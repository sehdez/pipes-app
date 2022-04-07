import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/venta.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = ''): Heroe[] {
    
    if(ordenarPor === '') {
      return heroes
    } else if( ordenarPor === 'color' ){
      heroes = heroes.sort( ( a,b ) => ( a.color > b.color )? 1: -1 );
      return heroes;  
    } else if( ordenarPor === 'vuela' ){
      heroes = heroes.sort( ( a,b ) => ( a.vuela < b.vuela )? 1: -1 );
      return heroes;  
    }else{  
    heroes = heroes.sort( ( a,b ) => ( a.nombre > b.nombre )? 1: -1 );
    return heroes;
    }
  }

}





