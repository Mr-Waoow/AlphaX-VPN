import { TestBed } from '@angular/core/testing';

import { CountriesProxyService } from './countries-proxy.service';

describe('CountriesProxyService', () => {
  let service: CountriesProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
