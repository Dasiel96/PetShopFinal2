import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsSuppliesBirdsComponent } from './pet-shop-animals-supplies-birds.component';

describe('PetShopAnimalsSuppliesBirdsComponent', () => {
  let component: PetShopAnimalsSuppliesBirdsComponent;
  let fixture: ComponentFixture<PetShopAnimalsSuppliesBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsSuppliesBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsSuppliesBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
