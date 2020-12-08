import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsSuppliesComponent } from './pet-shop-animals-supplies.component';

describe('PetShopAnimalsSuppliesComponent', () => {
  let component: PetShopAnimalsSuppliesComponent;
  let fixture: ComponentFixture<PetShopAnimalsSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsSuppliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
