import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../app.component';
import { PetShopProductsDetailService } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-pet-shop-product-listing',
  templateUrl: './pet-shop-product-listing.component.html',
  styleUrls: ['./pet-shop-product-listing.component.scss'],
})
export class PetShopProductListingComponent implements OnInit {

  @Input() product?: Product;
  @Input() key?: string;
  @Input() des?: string = ""

  name: string = ""
  imgUrl: string = ""
  price: string = ""
  link: string = ""
  index: number = 0


  constructor(
    private service: PetShopProductsDetailService,
    private router: Router
  ) { 
   
  }

  ngOnInit(): void {
    if (this.product) {
      this.name = this.product.name
      this.imgUrl = this.product.imgUrl
      this.price = this.product.price
      this.index = this.product.index
      this.link = this.product.link
    }
    else {
      this.name = "ERROR PRODUCT NOT FOUND"
      this.imgUrl = ""
      this.price = "N/A"
    }
  }

  redirect(key: string | undefined, index: number, link: string) {
    if (key) {
      this.service.setDataRetrieveData(key, index)
      this.router.navigate([link])
    }    
  }


}
