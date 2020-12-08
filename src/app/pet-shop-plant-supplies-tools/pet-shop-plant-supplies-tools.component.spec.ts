import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantSuppliesToolsComponent } from './pet-shop-plant-supplies-tools.component';

describe('PetShopPlantSuppliesToolsComponent', () => {
  let component: PetShopPlantSuppliesToolsComponent;
  let fixture: ComponentFixture<PetShopPlantSuppliesToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantSuppliesToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantSuppliesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
