import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-animals-mammals',
  templateUrl: './pet-shop-animals-mammals.component.html',
  styleUrls: ['./pet-shop-animals-mammals.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsMammalsComponent implements OnInit {

  product_objs_list: Product[] = []
  product_type = "mammals"
  constructor() { }

  ngOnInit(): void {
  }

}
