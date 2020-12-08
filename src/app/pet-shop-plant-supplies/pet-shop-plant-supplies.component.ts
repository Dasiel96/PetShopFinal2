import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { PetShopProductCatagoryServiceService } from '../pet-shop-product-catagory-service.service';

@Component({
  selector: 'app-pet-shop-plant-supplies',
  templateUrl: './pet-shop-plant-supplies.component.html',
  styleUrls: ['./pet-shop-plant-supplies.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopPlantSuppliesComponent implements OnInit {


  product_objs_list: Product[] = []
  constructor(service: PetShopProductCatagoryServiceService) { 
    const catagory = service.PLANT_SUPPLY_CATAGORY
    if (service.get(catagory)){
      this.product_objs_list = service.get(catagory)!!
    }
  }

  ngOnInit(): void {
  }

}
