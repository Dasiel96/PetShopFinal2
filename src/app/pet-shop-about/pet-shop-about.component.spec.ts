import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShopAboutComponent } from './pet-shop-about.component';

describe('PetShopAboutComponent', () => {
  let component: PetShopAboutComponent;
  let fixture: ComponentFixture<PetShopAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShopAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
