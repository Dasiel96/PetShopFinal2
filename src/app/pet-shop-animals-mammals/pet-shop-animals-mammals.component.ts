import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { productNavObj } from '../pet-shop-products-detail.service';

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
  product_catagory: productNavObj[] = []
  product_type = "mammals"
  constructor() { }

  ngOnInit(): void {
  }

}
