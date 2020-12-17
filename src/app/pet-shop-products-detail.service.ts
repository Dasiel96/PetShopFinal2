import { Injectable, OnInit } from '@angular/core';
import data from "../assets/json/content.json"

export interface JsonObj{
  name: string,
  price: string,
  des: string,
  des_short: string,
  ref: string,
  img_ref: string,
  img_url: string,
  img_name: string,
  item_index: number
}

@Injectable({
  providedIn: 'root'
})
export class PetShopProductsDetailService implements OnInit{
  private product_details = new Map<string, Array<JsonObj>>()
  private product_animals = new Array<string>()
  private product_supplies = new Array<string>()
  private readonly product_check = "supplies"
  private key = ""
  private index = 0

  constructor() {
    for (let key in data) {
      for (let val in data[key]){
        const json_data = data[key][val]
        const obj: JsonObj = {
          name: json_data["name"],
          price: json_data["price"],
          des: json_data["des"],
          des_short: json_data["des-short"],
          ref: json_data["ref"],
          img_ref: json_data["img-ref"],
          img_url: json_data["url"],
          img_name: json_data["img-name"],
          item_index: json_data["index"]
        }
        if (this.product_details.has(key)) {
          this.product_details.get(key)!.push(obj)
        }
        else {
          this.product_details.set(key, new Array())
          this.product_details.get(key)!.push(obj)
        }
      }
      this.getCorrectList(key).push(key)
    }
  }

  getCorrectList(key: string) {
    let cor_list = new Array<string>()
    if (key.includes(this.product_check)){
      cor_list = this.product_supplies
    }
    else {
      cor_list = this.product_animals
    }
    return cor_list
  }

  ngOnInit(): void {
    
  }

  getSpecies(key: string) {
    return this.product_details.get(key)
  }

  getKeys() {
    return this.product_details.keys()
  }

  setDataRetrieveData(key: string, index: number) {
    this.key = key
    this.index = index
  }

  getDataRetrieveData() {
    return [this.key, this.index]
  }
}
