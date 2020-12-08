import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsComponent } from './pet-shop-animals.component';

describe('PetShopAnimalsComponent', () => {
  let component: PetShopAnimalsComponent;
  let fixture: ComponentFixture<PetShopAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
