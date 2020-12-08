import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopStoreFrontComponent } from './pet-shop-store-front.component';

describe('PetShopStoreFrontComponent', () => {
  let component: PetShopStoreFrontComponent;
  let fixture: ComponentFixture<PetShopStoreFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopStoreFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopStoreFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
