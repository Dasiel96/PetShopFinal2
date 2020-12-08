import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsSuppliesFishComponent } from './pet-shop-animals-supplies-fish.component';

describe('PetShopAnimalsSuppliesFishComponent', () => {
  let component: PetShopAnimalsSuppliesFishComponent;
  let fixture: ComponentFixture<PetShopAnimalsSuppliesFishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsSuppliesFishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsSuppliesFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
