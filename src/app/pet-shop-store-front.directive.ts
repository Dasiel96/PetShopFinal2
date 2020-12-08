import { Directive, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { PetShopProductsDetailService } from './pet-shop-products-detail.service';

@Directive({
  selector: '[appPetShopStoreFront]'
})
export class PetShopStoreFrontDirective{

  @Input() promoUrl = ""
  @Input() deals = new Array<string>()
  @Input() supplies = new Array<string>()
  @Input() care_pack = new Array<string>()
  
  @Output() name = new EventEmitter<string>()

  @Input() set appPetShopStoreFront(empty: string) {
    this.view.createEmbeddedView(this.temp_ref)
    this.name.emit("name")
  }

  constructor(
    private service: PetShopProductsDetailService,
    private temp_ref: TemplateRef<any>,
    private view: ViewContainerRef
    ) {
      
  }

   

}
