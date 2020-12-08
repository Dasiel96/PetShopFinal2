import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopProductsComponent } from './pet-shop-products.component';

describe('PetShopProductsComponent', () => {
  let component: PetShopProductsComponent;
  let fixture: ComponentFixture<PetShopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
