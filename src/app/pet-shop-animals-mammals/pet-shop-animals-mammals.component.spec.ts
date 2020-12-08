import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAnimalsMammalsComponent } from './pet-shop-animals-mammals.component';

describe('PetShopAnimalsMammalsComponent', () => {
  let component: PetShopAnimalsMammalsComponent;
  let fixture: ComponentFixture<PetShopAnimalsMammalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAnimalsMammalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAnimalsMammalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
