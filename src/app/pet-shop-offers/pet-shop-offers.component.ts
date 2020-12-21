import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-offers',
  templateUrl: './pet-shop-offers.component.html',
  styleUrls: ['./pet-shop-offers.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopOffersComponent implements OnInit {

  @Input() product_list = new Array<Product>()
  @Input() offer_name = ""
  @Input() key?: string

  constructor() { }


  ngOnInit(): void {}

  getKey(product: Product) {
    const is_string = (val: string | undefined) => {return typeof val === typeof ""}
    let item_key = this.key

    if(!is_string(item_key) && is_string(product.key)) {
      item_key = product.key
    }
    return item_key
  }

}
