import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../app.component';

@Component({
  selector: 'app-pet-shop-product-catagories',
  templateUrl: './pet-shop-product-catagories.component.html',
  styleUrls: ['./pet-shop-product-catagories.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopProductCatagoriesComponent implements OnInit {

  @Input() product_objs_list: Product[] = []
  @Input() title = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(key: string, index: number, link: string) {

  }

}
