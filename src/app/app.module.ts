import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetShopStoreFrontComponent } from './pet-shop-store-front/pet-shop-store-front.component';
import { PetShopProductCatagoriesComponent } from './pet-shop-product-catagories/pet-shop-product-catagories.component';
import { PetShopAnimalsMammalsComponent } from './pet-shop-animals-mammals/pet-shop-animals-mammals.component';
import { PetShopAnimalsReptilesComponent } from './pet-shop-animals-reptiles/pet-shop-animals-reptiles.component';
import { PetShopAnimalsFishComponent } from './pet-shop-animals-fish/pet-shop-animals-fish.component';
import { PetShopAnimalsBirdsComponent } from './pet-shop-animals-birds/pet-shop-animals-birds.component';
import { PetShopPlantsAquaticComponent } from './pet-shop-plants-aquatic/pet-shop-plants-aquatic.component';
import { PetShopPlantsTerrestrialComponent } from './pet-shop-plants-terrestrial/pet-shop-plants-terrestrial.component';
import { PetShopPlantsHighLightComponent } from './pet-shop-plants-high-light/pet-shop-plants-high-light.component';
import { PetShopPlantsLowLightComponent } from './pet-shop-plants-low-light/pet-shop-plants-low-light.component';
import { PetShopAnimalsSuppliesMammalsComponent } from './pet-shop-animals-supplies-mammals/pet-shop-animals-supplies-mammals.component';
import { PetShopAnimalsSuppliesReptilesComponent } from './pet-shop-animals-supplies-reptiles/pet-shop-animals-supplies-reptiles.component';
import { PetShopAnimalsSuppliesFishComponent } from './pet-shop-animals-supplies-fish/pet-shop-animals-supplies-fish.component';
import { PetShopAnimalsSuppliesBirdsComponent } from './pet-shop-animals-supplies-birds/pet-shop-animals-supplies-birds.component';
import { PetShopPlantSuppliesToolsComponent } from './pet-shop-plant-supplies-tools/pet-shop-plant-supplies-tools.component';
import { PetShopPlantSuppliesLightsComponent } from './pet-shop-plant-supplies-lights/pet-shop-plant-supplies-lights.component';
import { PetShopPlantSuppliesSoilComponent } from './pet-shop-plant-supplies-soil/pet-shop-plant-supplies-soil.component';
import { PetShopPlantSuppliesFertilizerComponent } from './pet-shop-plant-supplies-fertilizer/pet-shop-plant-supplies-fertilizer.component';
import { PetShopAnimalsComponent } from './pet-shop-animals/pet-shop-animals.component';
import { PetShopAnimalsSuppliesComponent } from './pet-shop-animals-supplies/pet-shop-animals-supplies.component';
import { PetShopPlantsComponent } from './pet-shop-plants/pet-shop-plants.component';
import { PetShopPlantSuppliesComponent } from './pet-shop-plant-supplies/pet-shop-plant-supplies.component';
import { PetShopProductsComponent } from './pet-shop-products/pet-shop-products.component';
import { PetShopProductsDetailService } from './pet-shop-products-detail.service';
import { PetShopProductDynamicDirective } from './pet-shop-product-dynamic.directive';
import { PetShopProductInfoComponent } from './pet-shop-product-info/pet-shop-product-info.component';
import { PetShopProductCatagoryServiceService } from './pet-shop-product-catagory-service.service';
import { PetShopStoreFrontDirective } from './pet-shop-store-front.directive';
import { PetShopAboutComponent } from './pet-shop-about/pet-shop-about.component';
import { PetShopContactComponent } from './pet-shop-contact/pet-shop-contact.component';
import { TestDirDirective } from './test-dir.directive';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductNavBarComponent } from './product-nav-bar/product-nav-bar.component';
import { PetShopProductListingComponent } from './pet-shop-product-listing/pet-shop-product-listing.component';
import { PetShopOffersComponent } from './pet-shop-offers/pet-shop-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    PetShopStoreFrontComponent,
    PetShopProductCatagoriesComponent,
    PetShopAnimalsMammalsComponent,
    PetShopAnimalsReptilesComponent,
    PetShopAnimalsFishComponent,
    PetShopAnimalsBirdsComponent,
    PetShopPlantsAquaticComponent,
    PetShopPlantsTerrestrialComponent,
    PetShopPlantsHighLightComponent,
    PetShopPlantsLowLightComponent,
    PetShopAnimalsSuppliesMammalsComponent,
    PetShopAnimalsSuppliesReptilesComponent,
    PetShopAnimalsSuppliesFishComponent,
    PetShopAnimalsSuppliesBirdsComponent,
    PetShopPlantSuppliesToolsComponent,
    PetShopPlantSuppliesLightsComponent,
    PetShopPlantSuppliesSoilComponent,
    PetShopPlantSuppliesFertilizerComponent,
    PetShopAnimalsComponent,
    PetShopAnimalsSuppliesComponent,
    PetShopPlantsComponent,
    PetShopPlantSuppliesComponent,
    PetShopProductsComponent,
    PetShopProductDynamicDirective,
    PetShopProductInfoComponent,
    PetShopStoreFrontDirective,
    PetShopAboutComponent,
    PetShopContactComponent,
    TestDirDirective,
    ProductNavBarComponent,
    PetShopProductListingComponent,
    PetShopOffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PetShopProductsDetailService,
    PetShopProductCatagoryServiceService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
