import { Pipe, PipeTransform } from '@angular/core';
import { TypeProduct } from '../modules/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
 

  transform(products: TypeProduct, searc: string): any {
  //   return products.filter(p=>p.title.toLowerCase().includes(searc.toLocaleLowerCase()))
  }

}
