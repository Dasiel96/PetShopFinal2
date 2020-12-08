import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantsAquaticComponent } from './pet-shop-plants-aquatic.component';

describe('PetShopPlantsAquaticComponent', () => {
  let component: PetShopPlantsAquaticComponent;
  let fixture: ComponentFixture<PetShopPlantsAquaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantsAquaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantsAquaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
