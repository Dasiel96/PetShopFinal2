import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopPlantsTerrestrialComponent } from './pet-shop-plants-terrestrial.component';

describe('PetShopPlantsTerrestrialComponent', () => {
  let component: PetShopPlantsTerrestrialComponent;
  let fixture: ComponentFixture<PetShopPlantsTerrestrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopPlantsTerrestrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPlantsTerrestrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
