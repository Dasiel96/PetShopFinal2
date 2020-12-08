import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Product } from './app.component';
import { PetShopProductsDetailService } from './pet-shop-products-detail.service';
import * as site_links from "../assets/json/site-links.json"



@Directive({
  selector: '[appPetShopProductDynamic]'
})
export class PetShopProductDynamicDirective implements OnInit {

  @Input() product_objs_list: Product[] =[]

  constructor(
    private template_ref: TemplateRef<any>, 
    private view_container: ViewContainerRef,
    private service: PetShopProductsDetailService
    ) {}

    ngOnInit() : void {
      
    }

    @Input() set appPetShopProductDynamic(key: string) {
      const animal_list = this.service.getSpecies(key)

      if (animal_list) {
        for(let detail of animal_list) {
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

        this.view_container.createEmbeddedView(this.template_ref)
      }
    }

}
