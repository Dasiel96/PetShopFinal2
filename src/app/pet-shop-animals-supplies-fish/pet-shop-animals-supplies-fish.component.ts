import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-animals-supplies-fish',
  templateUrl: './pet-shop-animals-supplies-fish.component.html',
  styleUrls: ['./pet-shop-animals-supplies-fish.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsSuppliesFishComponent implements OnInit {

  product_objs_list:Product[] = []
  product_type ="fish-supplies"
  constructor() { }

  ngOnInit(): void {
  }

}
