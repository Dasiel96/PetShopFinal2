import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopOffersComponent } from './pet-shop-offers.component';

describe('PetShopOffersComponent', () => {
  let component: PetShopOffersComponent;
  let fixture: ComponentFixture<PetShopOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
