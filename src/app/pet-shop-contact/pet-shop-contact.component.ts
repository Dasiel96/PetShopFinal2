import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-shop-contact',
  templateUrl: './pet-shop-contact.component.html',
  styleUrls: ['./pet-shop-contact.component.scss'],
  host: {
    class: "col-12-span row"
  }
})
export class PetShopContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
