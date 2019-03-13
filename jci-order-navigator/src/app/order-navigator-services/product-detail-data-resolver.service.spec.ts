import { TestBed } from '@angular/core/testing';

import { ProductDetailDataResolverService } from './product-detail-data-resolver.service';

describe('ProductDetailDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailDataResolverService = TestBed.get(ProductDetailDataResolverService);
    expect(service).toBeTruthy();
  });
});
