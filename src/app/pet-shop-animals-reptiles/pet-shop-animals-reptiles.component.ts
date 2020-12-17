import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { productNavObj } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-animals-reptiles',
  templateUrl: './pet-shop-animals-reptiles.component.html',
  styleUrls: ['./pet-shop-animals-reptiles.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsReptilesComponent implements OnInit {

  product_objs_list: Product[] = []
  product_catagory: productNavObj[] = []
  product_type = "reptiles"
  constructor() { }

  ngOnInit(): void {
  }

}
