import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsBirdsComponent } from './pet-shop-animals-birds.component';

describe('PetShopAnimalsBirdsComponent', () => {
  let component: PetShopAnimalsBirdsComponent;
  let fixture: ComponentFixture<PetShopAnimalsBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
