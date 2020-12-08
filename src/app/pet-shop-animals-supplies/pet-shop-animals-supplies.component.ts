import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { PetShopProductCatagoryServiceService } from '../pet-shop-product-catagory-service.service';

@Component({
  selector: 'app-pet-shop-animals-supplies',
  templateUrl: './pet-shop-animals-supplies.component.html',
  styleUrls: ['./pet-shop-animals-supplies.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAnimalsSuppliesComponent implements OnInit {

  product_objs_list: Product[] = []

  constructor(service: PetShopProductCatagoryServiceService) { 
    const catagory = service.ANIMAL_SUPPLY_CATAGORY
    if (service.get(catagory)){
      this.product_objs_list = service.get(catagory)!!
    }
  }

  ngOnInit(): void {
  }

}
