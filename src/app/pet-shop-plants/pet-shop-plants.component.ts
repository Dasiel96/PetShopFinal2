import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { PetShopProductCatagoryServiceService } from '../pet-shop-product-catagory-service.service';

@Component({
  selector: 'app-pet-shop-plants',
  templateUrl: './pet-shop-plants.component.html',
  styleUrls: ['./pet-shop-plants.component.scss'],
  host: {
    class: 'col-12-span'
  }
})
export class PetShopPlantsComponent implements OnInit {

  product_objs_list: Product[] = []
  constructor(service: PetShopProductCatagoryServiceService) { 
    const catagory = service.PLANT_CATAGORY
    if (service.get(catagory)){
      this.product_objs_list = service.get(catagory)!!
    }
  }

  ngOnInit(): void {
  }

}
