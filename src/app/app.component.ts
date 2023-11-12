import { Component, OnInit } from '@angular/core';
import { TypeProduct } from './modules/product';
import { ProductService } from './services/services.product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-test';
   constructor(private productService: ProductService){
   }
   term=''
  products: TypeProduct[]=[]
   loading = false
  ngOnInit(): void {
    this.loading =true
    this.productService.getAll().subscribe((products: TypeProduct[])=>{
      this.products=products
      this.loading =false
    })
  }

}

