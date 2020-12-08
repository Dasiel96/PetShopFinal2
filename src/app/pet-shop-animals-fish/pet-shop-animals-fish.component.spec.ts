import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsFishComponent } from './pet-shop-animals-fish.component';

describe('PetShopAnimalsFishComponent', () => {
  let component: PetShopAnimalsFishComponent;
  let fixture: ComponentFixture<PetShopAnimalsFishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsFishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
