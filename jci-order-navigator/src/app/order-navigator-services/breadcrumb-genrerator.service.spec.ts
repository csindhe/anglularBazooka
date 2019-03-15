import { TestBed } from '@angular/core/testing';

import { BreadcrumbGenreratorService } from './breadcrumb-genrerator.service';

describe('BreadcrumbGenreratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadcrumbGenreratorService = TestBed.get(BreadcrumbGenreratorService);
    expect(service).toBeTruthy();
  });
});
