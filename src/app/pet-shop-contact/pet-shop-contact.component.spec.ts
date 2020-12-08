import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopContactComponent } from './pet-shop-contact.component';

describe('PetShopContactComponent', () => {
  let component: PetShopContactComponent;
  let fixture: ComponentFixture<PetShopContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
