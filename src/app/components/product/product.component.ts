import{Component, Input} from '@angular/core'
import { TypeProduct } from 'src/app/modules/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent{
  @Input()
  product!: TypeProduct
  details: boolean = false
}