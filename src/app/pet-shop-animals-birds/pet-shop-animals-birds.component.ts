import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { JsonObj, PetShopProductsDetailService, productNavObj } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-animals-birds',
  templateUrl: './pet-shop-animals-birds.component.html',
  styleUrls: ['../pet-shop-products/pet-shop-products.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopAnimalsBirdsComponent implements OnInit {

  product_objs_list: Product[] = []
  product_catagory: productNavObj[] = []
  product_type = "birds"
  constructor() { 
 
  }

  ngOnInit(): void {
    
  }

}
