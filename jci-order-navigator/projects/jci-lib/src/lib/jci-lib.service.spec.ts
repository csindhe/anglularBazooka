import { TestBed } from '@angular/core/testing';

import { JciLibService } from './jci-lib.service';

describe('JciLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JciLibService = TestBed.get(JciLibService);
    expect(service).toBeTruthy();
  });
});
