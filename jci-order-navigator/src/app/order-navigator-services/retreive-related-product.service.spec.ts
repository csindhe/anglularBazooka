import { TestBed } from '@angular/core/testing';

import { RetreiveRelatedProductService } from './retreive-related-product.service';

describe('RetreiveRelatedProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetreiveRelatedProductService = TestBed.get(RetreiveRelatedProductService);
    expect(service).toBeTruthy();
  });
});
