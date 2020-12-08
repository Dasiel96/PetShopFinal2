import { TestBed } from '@angular/core/testing';

import { PetShopProductCatagoryServiceService } from './pet-shop-product-catagory-service.service';

describe('PetShopProductCatagoryServiceService', () => {
  let service: PetShopProductCatagoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetShopProductCatagoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
