import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetShopAnimalsBirdsComponent } from './pet-shop-animals-birds/pet-shop-animals-birds.component';
import { PetShopAnimalsFishComponent } from './pet-shop-animals-fish/pet-shop-animals-fish.component';
import { PetShopAnimalsMammalsComponent } from './pet-shop-animals-mammals/pet-shop-animals-mammals.component';
import { PetShopAnimalsReptilesComponent } from './pet-shop-animals-reptiles/pet-shop-animals-reptiles.component';
import { PetShopAnimalsSuppliesBirdsComponent } from './pet-shop-animals-supplies-birds/pet-shop-animals-supplies-birds.component';
import { PetShopAnimalsSuppliesFishComponent } from './pet-shop-animals-supplies-fish/pet-shop-animals-supplies-fish.component';
import { PetShopAnimalsSuppliesMammalsComponent } from './pet-shop-animals-supplies-mammals/pet-shop-animals-supplies-mammals.component';
import { PetShopAnimalsSuppliesReptilesComponent } from './pet-shop-animals-supplies-reptiles/pet-shop-animals-supplies-reptiles.component';
import { PetShopAnimalsSuppliesComponent } from './pet-shop-animals-supplies/pet-shop-animals-supplies.component';
import { PetShopAnimalsComponent } from './pet-shop-animals/pet-shop-animals.component';
import { PetShopPlantSuppliesComponent } from './pet-shop-plant-supplies/pet-shop-plant-supplies.component';
import { PetShopPlantsComponent } from './pet-shop-plants/pet-shop-plants.component';
import { PetShopProductInfoComponent } from './pet-shop-product-info/pet-shop-product-info.component';
import { PetShopStoreFrontComponent } from './pet-shop-store-front/pet-shop-store-front.component';
import * as site_links from "../assets/json/site-links.json"
import { PetShopPlantsAquaticComponent } from './pet-shop-plants-aquatic/pet-shop-plants-aquatic.component';
import { PetShopPlantsTerrestrialComponent } from './pet-shop-plants-terrestrial/pet-shop-plants-terrestrial.component';
import { PetShopPlantsLowLightComponent } from './pet-shop-plants-low-light/pet-shop-plants-low-light.component';
import { PetShopPlantsHighLightComponent } from './pet-shop-plants-high-light/pet-shop-plants-high-light.component';
import { PetShopPlantSuppliesSoilComponent } from './pet-shop-plant-supplies-soil/pet-shop-plant-supplies-soil.component';
import { PetShopPlantSuppliesFertilizerComponent } from './pet-shop-plant-supplies-fertilizer/pet-shop-plant-supplies-fertilizer.component';
import { PetShopPlantSuppliesToolsComponent } from './pet-shop-plant-supplies-tools/pet-shop-plant-supplies-tools.component';
import { PetShopPlantSuppliesLightsComponent } from './pet-shop-plant-supplies-lights/pet-shop-plant-supplies-lights.component';
import { PetShopAboutComponent } from './pet-shop-about/pet-shop-about.component';
import { PetShopContactComponent } from './pet-shop-contact/pet-shop-contact.component';
const url_name = "pet-shop"

const routes: Routes = [
  {
    path: site_links.birds,
    component: PetShopAnimalsBirdsComponent
  },
  {
    path: site_links.mammals,
    component: PetShopAnimalsMammalsComponent
  },
  {
    path: site_links.fish,
    component: PetShopAnimalsFishComponent
  },
  {
    path: site_links.reptiles,
    component: PetShopAnimalsReptilesComponent
  },
  {
    path: site_links["bird-supplies"],
    component: PetShopAnimalsSuppliesBirdsComponent
  },
  {
    path: site_links["mammal-supplies"],
    component: PetShopAnimalsSuppliesMammalsComponent
  },
  {
    path: site_links["reptile-supplies"],
    component: PetShopAnimalsSuppliesReptilesComponent
  },
  {
    path: site_links["fish-supplies"],
    component: PetShopAnimalsSuppliesFishComponent
  },
  {
    path: site_links["aquatic-plants"],
    component: PetShopPlantsAquaticComponent
  },
  {
    path: site_links["land-plants"],
    component: PetShopPlantsTerrestrialComponent
  },
  {
    path: site_links["low-light-plants"],
    component: PetShopPlantsLowLightComponent
  },
  {
    path: site_links["high-light-plants"],
    component: PetShopPlantsHighLightComponent
  },
  {
    path: site_links.soil,
    component: PetShopPlantSuppliesSoilComponent
  },
  {
    path: site_links.ferts,
    component: PetShopPlantSuppliesFertilizerComponent
  },
  {
    path: site_links.tools,
    component: PetShopPlantSuppliesToolsComponent
  },
  {
    path: site_links.lights,
    component: PetShopPlantSuppliesLightsComponent
  },
  {
    path: site_links.animals,
    component: PetShopAnimalsComponent
  },
  {
    path: site_links["animal-supplies"],
    component: PetShopAnimalsSuppliesComponent
  },
  {
    path: site_links.plants,
    component: PetShopPlantsComponent
  },
  {
    path: site_links["plant-supplies"],
    component: PetShopPlantSuppliesComponent
  },
  {
    path: site_links.about,
    component: PetShopAboutComponent
  },
  {
    path: site_links.home,
    component: PetShopStoreFrontComponent
  },
  {
    path: site_links.info,
    component: PetShopProductInfoComponent
  },
  {
    path: site_links.contact,
    component: PetShopContactComponent
  },
  {
    path: site_links.blank,
    component: PetShopStoreFrontComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
