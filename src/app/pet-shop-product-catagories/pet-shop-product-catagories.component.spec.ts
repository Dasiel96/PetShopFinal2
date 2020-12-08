import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopProductCatagoriesComponent } from './pet-shop-product-catagories.component';

describe('PetShopProductCatagoriesComponent', () => {
  let component: PetShopProductCatagoriesComponent;
  let fixture: ComponentFixture<PetShopProductCatagoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopProductCatagoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopProductCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
