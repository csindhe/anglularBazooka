import { TestBed } from '@angular/core/testing';

import { HomePageDataResolverService } from './home-page-data-resolver.service';

describe('HomePageDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePageDataResolverService = TestBed.get(HomePageDataResolverService);
    expect(service).toBeTruthy();
  });
});
