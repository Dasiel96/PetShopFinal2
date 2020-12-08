import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../app.component';
import { JsonObj, PetShopProductsDetailService } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-products',
  templateUrl: './pet-shop-products.component.html',
  styleUrls: ['./pet-shop-products.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopProductsComponent implements OnInit {

  @Input() product_objs_list: Product[] = []
  @Input() product_type = ""
  constructor(private router: Router, private service: PetShopProductsDetailService) { }

  ngOnInit(): void {
  }

  saveKeyAndIndex(key: string, link: string, index: number) {
    this.service.setDataRetrieveData(key, index)
    this.router.navigate([link])
  }

}
