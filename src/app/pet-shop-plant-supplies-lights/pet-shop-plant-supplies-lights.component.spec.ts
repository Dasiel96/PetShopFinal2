import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantSuppliesLightsComponent } from './pet-shop-plant-supplies-lights.component';

describe('PetShopPlantSuppliesLightsComponent', () => {
  let component: PetShopPlantSuppliesLightsComponent;
  let fixture: ComponentFixture<PetShopPlantSuppliesLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantSuppliesLightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantSuppliesLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
