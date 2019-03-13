import { TestBed } from '@angular/core/testing';

import { ProductListDataResolverService } from './product-list-data-resolver.service';

describe('ProductListDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductListDataResolverService = TestBed.get(ProductListDataResolverService);
    expect(service).toBeTruthy();
  });
});
