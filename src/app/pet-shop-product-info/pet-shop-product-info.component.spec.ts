import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopProductInfoComponent } from './pet-shop-product-info.component';

describe('PetShopProductInfoComponent', () => {
  let component: PetShopProductInfoComponent;
  let fixture: ComponentFixture<PetShopProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopProductInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
