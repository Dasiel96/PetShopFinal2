import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Product } from './app.component';
import { PetShopProductsDetailService } from './pet-shop-products-detail.service';
import * as site_links from "../assets/json/site-links.json"



@Directive({
  selector: '[appPetShopProductDynamic]'
})
export class PetShopProductDynamicDirective implements OnInit {

  @Input() product_objs_list: Product[] = []
  @Input() product_catagory: string[] = []

  constructor(
    private template_ref: TemplateRef<any>,
    private view_container: ViewContainerRef,
    private service: PetShopProductsDetailService
  ) { }

  ngOnInit(): void {

  }

  private initObjsList(key: string) {
    const animal_list = this.service.getSpecies(key)
    if (animal_list) {
      for (let detail of animal_list) {
        const product: Product = {
          name: detail.name,
          price: detail.price,
          imgUrl: `${detail.img_url}${detail.img_name}`,
          link: `/${site_links.info}`,
          index: detail.item_index,
          des: detail.des_short,
        }

        this.product_objs_list.push(product)
      }
    }
  }

  private initCatagory(key: string) {
    while (this.product_catagory.length > 0) {
      this.product_catagory.pop()
    }
    for (let c of this.service.getCorrectList(key)) {
      this.product_catagory.push(c)
    }
  }

  @Input() set appPetShopProductDynamic(key: string) {
    this.initObjsList(key)
    this.initCatagory(key)
    this.view_container.createEmbeddedView(this.template_ref)
  }
}


