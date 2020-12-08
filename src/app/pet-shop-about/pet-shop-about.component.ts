import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-shop-about',
  templateUrl: './pet-shop-about.component.html',
  styleUrls: ['./pet-shop-about.component.scss'],
  host: {
    class: "col-12-span"
  }
})
export class PetShopAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
