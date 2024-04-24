import { TestBed } from '@angular/core/testing';

import { SharedPricesService } from './shared-prices.service';

describe('SharedPricesService', () => {
  let service: SharedPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
