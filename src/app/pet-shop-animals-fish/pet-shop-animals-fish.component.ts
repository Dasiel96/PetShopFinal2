import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

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
  product_catagory: string[] = []
  product_type = "fish"
  constructor() { }

  ngOnInit(): void {
  }

}
