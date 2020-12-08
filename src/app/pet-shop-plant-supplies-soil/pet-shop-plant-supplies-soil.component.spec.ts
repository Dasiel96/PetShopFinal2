import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantSuppliesSoilComponent } from './pet-shop-plant-supplies-soil.component';

describe('PetShopPlantSuppliesSoilComponent', () => {
  let component: PetShopPlantSuppliesSoilComponent;
  let fixture: ComponentFixture<PetShopPlantSuppliesSoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantSuppliesSoilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantSuppliesSoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
