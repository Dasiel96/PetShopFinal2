import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantsHighLightComponent } from './pet-shop-plants-high-light.component';

describe('PetShopPlantsHighLightComponent', () => {
  let component: PetShopPlantsHighLightComponent;
  let fixture: ComponentFixture<PetShopPlantsHighLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantsHighLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantsHighLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
