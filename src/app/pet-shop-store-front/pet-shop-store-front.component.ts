import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { JsonObj, PetShopProductsDetailService } from '../pet-shop-products-detail.service';
import * as site_links from "../../assets/json/site-links.json"
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-shop-store-front',
  templateUrl: './pet-shop-store-front.component.html',
  styleUrls: ['./pet-shop-store-front.component.scss'],
  host: {
    class: "col-12-span row"
  },
})
export class PetShopStoreFrontComponent implements OnInit {

  promoUrl = this.createEmptyProduct()
  pUrl = ""
  key = ""
  deals = new Array<Product>()
  supplies = new Array<Product>()
  care_pack = new Array<Product>()

  private promo_index = 0
  private promo_list = new Array<Product>()

  constructor(private service: PetShopProductsDetailService, private router: Router) {
  }

  ngOnInit(): void {
    let rand_key = this.getRandomKey(this.service)

    this.getPromoImg(rand_key)
    this.fillOffersList(this.deals)
    this.fillSupplyOffersList(this.supplies)
    this.fillOffersList(this.care_pack)
    console.log(this.deals, this.supplies, this.care_pack)
  }

  private getPromoImg(key: string) {
    const product_list = this.service.getSpecies(key)

    if (product_list && product_list.length > 0) {

      try {
        const item = this.createProduct(this.getRandomItem(product_list), key)
        const url_parts = item.imgUrl.split("/")
        const len = url_parts.length
        const img_len = url_parts[len-1].length
        console.log(url_parts[len-1], url_parts[len-2])
        url_parts[len-2] = `${url_parts[len-2]}-500px`
        url_parts[len-1] = `${url_parts[len-1].substr(0, img_len-4)}-lg.jpg`
        item.imgUrl = url_parts.join("/")
        this.promoUrl = item

        this.promo_list.push(item)
        this.promo_index = this.promo_list.length - 1
      }
      catch {}
    }
  }

  private fillOffersList(list: Product[]) {
    let rand_key = this.getRandomKey(this.service)
    this.fillList(rand_key, list)
  }

  private fillSupplyOffersList(list: Product[]) {
    let rand_key = this.getRandomSupplyKey(this.service)
    this.fillList(rand_key, list, true)
  }

  private fillList(rand_key: string, list: Product[], supply:boolean=false) {
    let product_list = this.service.getSpecies(rand_key)

    if (product_list) {
      for (let i = 0; i < 3; i++) {
        let product = this.createProduct(this.getRandomItem(product_list!!), rand_key)
        while (this.checkUrlExistsInList(list, product.imgUrl)){
          if (supply){
            rand_key = this.getRandomSupplyKey(this.service)
          }
          else {
            rand_key = this.getRandomKey(this.service)
          }
          product_list = this.service.getSpecies(rand_key)
          product = this.createProduct(this.getRandomItem(product_list!!), rand_key)
        }
        list.push(product)
      }
    }
  }

  private getRandomKey(service: PetShopProductsDetailService) {
    const len = this.getKeyListLen(service) - 1
    const rand_key = this.getKey(service, Math.round(Math.random() * len))
    return rand_key
  }

  private getRandomSupplyKey(service: PetShopProductsDetailService) {
    let rand_key = this.getRandomKey(this.service)
    const check_is_supply = (key: string) => {
      return key.includes("supplies")
    }

    while (!check_is_supply(rand_key)) {
      rand_key = this.getRandomKey(this.service)
    }
    return rand_key
  }

  private getRandomItem(jsonList: JsonObj[]) {
    const random_index = Math.round(Math.random() * (jsonList.length - 1))
    return jsonList[random_index]
  }

  private getKeyListLen(service: PetShopProductsDetailService) {
    let list_len = 0
    const key_list = service.getKeys()

    for (let key of key_list) {
      list_len++
    }

    return list_len
  }

  private getKey(service: PetShopProductsDetailService, index: number) {
    let map_key = ""
    let cur_index = 0
    const key_list = service.getKeys()

    for (let key of key_list) {
      if (cur_index < index) {
        cur_index++
      }
      else {
        map_key = key
        break
      }
    }

    return map_key
  }

  private createProduct(jsonObj: JsonObj, catagory_key: string) {
    const product: Product = {
      name: jsonObj.name,
      imgUrl: `${jsonObj.img_url}${jsonObj.img_name}`,
      price: jsonObj.price,
      link: site_links.info,
      index: jsonObj.item_index,
      des: jsonObj.des,
      key: catagory_key
    }
    return product
  }

  private createEmptyProduct() {
    const product: Product = {
      name: "",
      imgUrl: "",
      price: "",
      link: "",
      index: 0,
      des: "",
      key: ""
    }
    return product
  }

  next() {
    if (this.promo_index + 1 < this.promo_list.length) {
      this.promo_index++
      this.promoUrl = this.promo_list[this.promo_index]
    }
    else {
      this.getPromoImg(this.getRandomKey(this.service))
    }
  }

  private checkUrlExistsInList(list: Product[], url: string) {
    let exist = false

    for (let product of list) {
      if (product.imgUrl === url) {
        exist = true
        break
      }
    }

    return exist
  }
  prev() {
    if (this.promo_index - 1 > 0) {
      this.promo_index--
      this.promoUrl = this.promo_list[this.promo_index]
    }
  }

  redirect(key: string, index: number, link: string) {
    this.service.setDataRetrieveData(key, index)
    this.router.navigate([link])    
  }

}
