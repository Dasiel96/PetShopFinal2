import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopProductListingComponent } from './pet-shop-product-listing.component';

describe('PetShopProductListingComponent', () => {
  let component: PetShopProductListingComponent;
  let fixture: ComponentFixture<PetShopProductListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopProductListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
