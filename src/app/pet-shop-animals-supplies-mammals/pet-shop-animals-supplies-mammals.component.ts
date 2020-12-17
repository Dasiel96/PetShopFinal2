import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

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
  product_catagory: string[] = []
  product_type ="mammal-supplies"
  constructor() { }

  ngOnInit(): void {
  }

}
