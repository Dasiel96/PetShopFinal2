import { Component, OnInit } from '@angular/core';
import { PetShopProductsDetailService } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-product-info',
  templateUrl: './pet-shop-product-info.component.html',
  styleUrls: ['./pet-shop-product-info.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopProductInfoComponent implements OnInit {

  imgUrl = ""
  des = ""
  imgSource = ""
  desSource = ""
  price = ""
  name = ""

  constructor(service: PetShopProductsDetailService) { 
    const data_list = service.getDataRetrieveData()
    const key = data_list[0] as string
    const index = data_list[1] as number

    const product_list = service.getSpecies(key)
    if (product_list) {
      const product = product_list[index]
      this.imgUrl = `${product.img_url}${product.img_name}`
      this.des = product.des
      this.imgSource = product.img_ref
      this.desSource = product.ref
      this.price = product.price
      this.name = product.name
    }
  }

  ngOnInit(): void {
  }

}
