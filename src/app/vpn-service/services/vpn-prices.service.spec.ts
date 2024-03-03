import { TestBed } from '@angular/core/testing';

import { VpnPricesService } from './vpn-prices.service';

describe('VpnPricesService', () => {
  let service: VpnPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VpnPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
