import { TestBed } from '@angular/core/testing';

import { PetShopProductsDetailService } from './pet-shop-products-detail.service';

describe('PetShopProductsDetailService', () => {
  let service: PetShopProductsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetShopProductsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
