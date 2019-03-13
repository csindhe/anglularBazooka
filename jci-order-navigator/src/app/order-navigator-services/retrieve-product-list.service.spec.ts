import { TestBed } from '@angular/core/testing';

import { RetrieveProductListService } from './retrieve-product-list.service';

describe('RetrieveProductListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieveProductListService = TestBed.get(RetrieveProductListService);
    expect(service).toBeTruthy();
  });
});
