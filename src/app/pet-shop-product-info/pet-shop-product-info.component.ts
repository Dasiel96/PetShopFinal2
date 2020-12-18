import { Component, OnInit } from '@angular/core';
import { PetShopProductsDetailService, productNavObj } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-product-info',
  templateUrl: './pet-shop-product-info.component.html',
  styleUrls: ['./pet-shop-product-info.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopProductInfoComponent implements OnInit {

  imgUrl = ""
  des = ""
  imgSource = ""
  desSource = ""
  price = ""
  name = ""
  product_catagory = new Array<productNavObj>()
  product_type: string

  constructor(service: PetShopProductsDetailService) { 
    const data_list = service.getDataRetrieveData()
    const key = data_list[0] as string
    const index = data_list[1] as number
    this.product_type = key

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

    for (let product of service.getCorrectList(key)){
      this.product_catagory.push(product)
    }
  }

  ngOnInit(): void {
  }

  isCurrentPage(key: string) {
    return key === this.product_type
  }

  displayName(link_name: string) {
    const name = link_name.replace("-", " ")
    return name
  }

}
