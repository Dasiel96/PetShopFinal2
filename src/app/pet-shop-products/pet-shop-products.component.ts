import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../app.component';
import { JsonObj, PetShopProductsDetailService } from '../pet-shop-products-detail.service';
import * as site_links from "../../assets/json/site-links.json"

@Component({
  selector: 'app-pet-shop-products',
  templateUrl: './pet-shop-products.component.html',
  styleUrls: ['./pet-shop-products.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopProductsComponent implements OnInit {

  @Input() product_objs_list: Product[] = []
  @Input() product_type = ""
  @Input() product_catagory: string[] = []

  links = new Map<string, string>()

  constructor(private router: Router, private service: PetShopProductsDetailService) { 
    this.links.set("birds", site_links.birds)
    this.links.set("reptiles", site_links.reptiles)
    this.links.set("mammals", site_links.mammals)
    this.links.set("fish", site_links.fish)
    this.links.set("bird-supplies", site_links['bird-supplies'])
    this.links.set("reptile-supplies", site_links['reptile-supplies'])
    this.links.set("mammal-supplies", site_links['mammal-supplies'])
    this.links.set("fish-supplies", site_links['fish-supplies'])
  }

  ngOnInit(): void {
  }

  saveKeyAndIndex(key: string, link: string, index: number) {
    this.service.setDataRetrieveData(key, index)
    this.router.navigate([link])
  }

}
