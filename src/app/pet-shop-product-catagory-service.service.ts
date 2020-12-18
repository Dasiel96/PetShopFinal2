import { Injectable } from '@angular/core';
import { Product } from './app.component';
import * as site_links from "../assets/json/site-links.json"

@Injectable({
  providedIn: 'root'
})
export class PetShopProductCatagoryServiceService {

  private product_catagories = new Map<string, Product[]>()

  readonly ANIMAL_CATAGORY = "animals"
  readonly ANIMAL_SUPPLY_CATAGORY = "animal-supply"
  readonly PLANT_CATAGORY = "plants"
  readonly PLANT_SUPPLY_CATAGORY = "plants-supply"

  constructor() {
    this.initAnimal()
    this.initAnimalSupply()
    this.initPlant()
    this.initPlantSupply()
  }

  private initAnimal() {
    this.product_catagories.set(this.ANIMAL_CATAGORY,
      [
        {
          name: "mammals",
          imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-mammal-catagory.jpg",
          price: "",
          link: `#${site_links.mammals}`,
          index: 0,
          sourceUrl: "https://petkingdom.org/small-animals/"
        },
        {
          name: "fish",
          imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-fish-catagories.jpg",
          price: "",
          link: `#${site_links.fish}`,
          index: 0,
          sourceUrl: 'https://listontap.com/top-10-cutest-fish-breeds-list/'
        },
        {
          name: "reptiles",
          imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-reptile-catagories.jpg",
          price: "",
          link: `#${site_links.reptiles}`,
          index: 0,
          sourceUrl: 'https://www.petlanddunwoody.com/reptiles/'
        },
        {
          name: "birds",
          imgUrl: "assets/images/pet-shop-animal-catagories/pet-shop-bird-catagories.jpg",
          price: "",
          link: `#${site_links.birds}`,
          index: 0,
          sourceUrl: 'https://lafeber.com/pet-birds/species/zebra-finch/'
        },
      ])
  }

  private initAnimalSupply() {
    this.product_catagories.set(this.ANIMAL_SUPPLY_CATAGORY, [
      {
        name: "mammal supplies", 
        imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-mammal-supplies.jpg", 
        price: "",
        link: `#${site_links["mammal-supplies"]}`,
        index: 0,
        sourceUrl: 'https://co.pinterest.com/pin/148196643970422260/'
      },
      {
        name: "fish supplies", 
        imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-fish-supplies.jpg", 
        price: "",
        link: `#${site_links["fish-supplies"]}`,
        index: 0,
        sourceUrl: 'https://the9best.com/categories/pet-supplies/fish-and-aquatic-pets/' 
      },
      {
        name: "reptile supplies", 
        imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-reptile-supplies.jpg", 
        price: "",
        link: `#${site_links["reptile-supplies"]}`,
        index: 0,
        sourceUrl: 'https://www.pinterest.com/pin/511721576407166528/'
      },
      {
        name: "bird supplies", 
        imgUrl: "assets/images/pet-shop-animal-supply-catagories/pet-shop-bird-supplies.jpg", 
        price: "",
        link: `#${site_links["bird-supplies"]}`,
        index: 0,
        sourceUrl: 'https://www.amazon.com/PETUOL-Parrots-Anchovies-Parakeets-Cockatiel/dp/B07QYRGYW6'
      },
      
    ])
  }

  private initPlant() {
    this.product_catagories.set(this.PLANT_CATAGORY, [
      {
        name: "aquatic plants", 
        imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-aquatic-plants-sm.jpg", 
        price: "",
        link: `#${site_links["aquatic-plants"]}`,
        index: 0
      },
      {
        name: "terrestrial plants", 
        imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-terrestrial-plants.jpg", 
        price: "",
        link: `#${site_links["land-plants"]}`,
        index: 0
      },
      {
        name: "low light plants", 
        imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-low-light-plants-sm.jpg", 
        price: "",
        link: `#${site_links["low-light-plants"]}`,
        index: 0
      },
      {
        name: "high light plants", 
        imgUrl: "assets/images/pet-shop-plant-catagories/pet-shop-high-light-plants.jpg", 
        price: "",
        link: `#${site_links["high-light-plants"]}`,
        index: 0
      },
    ])
  }

  private initPlantSupply() {
    this.product_catagories.set(this.PLANT_SUPPLY_CATAGORY, [
      {
        name: "plant soil", 
        imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-soil.jpg", 
        price: "",
        link: `#${site_links.soil}`,
        index: 0
      },
      {
        name: "plant fertilizer", 
        imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-fert.jpg", 
        price: "",
        link: `#${site_links.ferts}`,
        index: 0
      },
      {
        name: "plant lights", 
        imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-light.jpeg", 
        price: "",
        link: `#${site_links.lights}`,
        index: 0
      },
      {
        name: "plant tools", 
        imgUrl: "assets/images/pet-shop-plant-supply-catagories/pet-shop-plant-tools.jpg", 
        price: "",
        link: `#${site_links.tools}`,
        index: 0
      },
    ])
  }

  get(key: string) {
    return this.product_catagories.get(key)
  }
}
