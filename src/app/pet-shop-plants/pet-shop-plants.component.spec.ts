import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantsComponent } from './pet-shop-plants.component';

describe('PetShopPlantsComponent', () => {
  let component: PetShopPlantsComponent;
  let fixture: ComponentFixture<PetShopPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
