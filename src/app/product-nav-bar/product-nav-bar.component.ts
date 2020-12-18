import { Component, Input, OnInit } from '@angular/core';
import { productNavObj } from '../pet-shop-products-detail.service';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class ProductNavBarComponent implements OnInit {

  @Input() nav_list = new Array<productNavObj>()
  @Input() product_key = ""
  constructor() { }

  ngOnInit(): void {
  }

  isCurrentPage(key: string) {
    return key === this.product_key
  }

  displayName(link_name: string) {
    return link_name.replace("-", " ")
  }

}
