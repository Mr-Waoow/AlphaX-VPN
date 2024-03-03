import { TestBed } from '@angular/core/testing';

import { VpnPeriodsService } from './vpn-periods.service';

describe('VpnPeriodsService', () => {
  let service: VpnPeriodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VpnPeriodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
