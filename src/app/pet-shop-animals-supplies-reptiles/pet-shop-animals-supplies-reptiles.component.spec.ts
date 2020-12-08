import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsSuppliesReptilesComponent } from './pet-shop-animals-supplies-reptiles.component';

describe('PetShopAnimalsSuppliesReptilesComponent', () => {
  let component: PetShopAnimalsSuppliesReptilesComponent;
  let fixture: ComponentFixture<PetShopAnimalsSuppliesReptilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsSuppliesReptilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsSuppliesReptilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
