import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantSuppliesComponent } from './pet-shop-plant-supplies.component';

describe('PetShopPlantSuppliesComponent', () => {
  let component: PetShopPlantSuppliesComponent;
  let fixture: ComponentFixture<PetShopPlantSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantSuppliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
