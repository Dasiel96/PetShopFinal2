import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { productNavObj } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-animals-supplies-mammals',
  templateUrl: './pet-shop-animals-supplies-mammals.component.html',
  styleUrls: ['./pet-shop-animals-supplies-mammals.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsSuppliesMammalsComponent implements OnInit {

  product_objs_list:Product[] = []
  product_catagory: productNavObj[] = []
  product_type ="mammal-supplies"
  constructor() { }

  ngOnInit(): void {
  }

}
