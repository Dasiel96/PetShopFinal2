import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { productNavObj } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-animals-supplies-birds',
  templateUrl: './pet-shop-animals-supplies-birds.component.html',
  styleUrls: ['./pet-shop-animals-supplies-birds.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsSuppliesBirdsComponent implements OnInit {

  product_objs_list:Product[] = []
  product_catagory: productNavObj[] = []
  product_type ="bird-supplies"
  constructor() { }

  ngOnInit(): void {
  }

}
