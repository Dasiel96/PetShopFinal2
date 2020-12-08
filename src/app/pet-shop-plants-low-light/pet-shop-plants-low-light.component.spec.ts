import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantsLowLightComponent } from './pet-shop-plants-low-light.component';

describe('PetShopPlantsLowLightComponent', () => {
  let component: PetShopPlantsLowLightComponent;
  let fixture: ComponentFixture<PetShopPlantsLowLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantsLowLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantsLowLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
