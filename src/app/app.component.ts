import { Component } from '@angular/core';
import * as site_links from '../assets/json/site-links.json'


export interface Product {
  name: string,
  imgUrl: string,
  price: string,
  link: string,
  index: number,
  des?: string,
  key?: string,
  sourceUrl?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PetShop';
  home_link = site_links.home
  animals_link = site_links.animals
  animal_supply_link = site_links["animal-supplies"]
  plant_links = site_links.plants
  plant_supply_links = site_links["plant-supplies"]
  about_link = site_links.about
  contact_link = site_links.contact
}
