import { TestBed } from '@angular/core/testing';

import { PopularRatesService } from './popular-rates.service';

describe('PopularRatesService', () => {
  let service: PopularRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
