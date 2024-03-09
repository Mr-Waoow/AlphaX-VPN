import { TestBed } from '@angular/core/testing';

import { PersonalPricesService } from './personal-prices.service';

describe('PersonalPricesService', () => {
  let service: PersonalPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
