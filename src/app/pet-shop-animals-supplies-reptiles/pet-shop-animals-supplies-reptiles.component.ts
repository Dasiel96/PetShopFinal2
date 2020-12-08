import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-animals-supplies-reptiles',
  templateUrl: './pet-shop-animals-supplies-reptiles.component.html',
  styleUrls: ['./pet-shop-animals-supplies-reptiles.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopAnimalsSuppliesReptilesComponent implements OnInit {

  product_objs_list:Product[] = []
  product_type ="reptile-supplies"
  constructor() { }

  ngOnInit(): void {
  }

}
