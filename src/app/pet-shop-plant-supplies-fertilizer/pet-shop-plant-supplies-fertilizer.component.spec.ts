import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantSuppliesFertilizerComponent } from './pet-shop-plant-supplies-fertilizer.component';

describe('PetShopPlantSuppliesFertilizerComponent', () => {
  let component: PetShopPlantSuppliesFertilizerComponent;
  let fixture: ComponentFixture<PetShopPlantSuppliesFertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantSuppliesFertilizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantSuppliesFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
