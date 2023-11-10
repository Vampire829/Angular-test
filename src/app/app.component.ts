import { Component } from '@angular/core';
import { TypeProduct } from './modules/product';
import{products as data} from './data/produts'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-test';
   
  products: TypeProduct[]=data
}

