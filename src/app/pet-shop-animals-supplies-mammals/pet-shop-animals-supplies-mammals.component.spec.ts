import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsSuppliesMammalsComponent } from './pet-shop-animals-supplies-mammals.component';

describe('PetShopAnimalsSuppliesMammalsComponent', () => {
  let component: PetShopAnimalsSuppliesMammalsComponent;
  let fixture: ComponentFixture<PetShopAnimalsSuppliesMammalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsSuppliesMammalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsSuppliesMammalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
