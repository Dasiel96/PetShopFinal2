import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsReptilesComponent } from './pet-shop-animals-reptiles.component';

describe('PetShopAnimalsReptilesComponent', () => {
  let component: PetShopAnimalsReptilesComponent;
  let fixture: ComponentFixture<PetShopAnimalsReptilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsReptilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsReptilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
