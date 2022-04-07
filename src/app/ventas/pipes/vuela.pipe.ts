import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'vuela'
})


export class VuelaPipe implements PipeTransform{

    transform(value: boolean):string {
        return (value)
        ? 'Sí puede volar, es la mera verdura'
        : 'No puede volar, es chafa'
    }

}