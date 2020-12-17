import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { productNavObj } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-animals-fish',
  templateUrl: './pet-shop-animals-fish.component.html',
  styleUrls: ['./pet-shop-animals-fish.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsFishComponent implements OnInit {

  product_objs_list: Product[] = []
  product_catagory: productNavObj[] = []
  product_type = "fish"
  constructor() { }

  ngOnInit(): void {
  }

}
