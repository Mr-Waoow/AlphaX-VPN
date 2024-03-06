import { TestBed } from '@angular/core/testing';

import { ProxiesCheckersService } from './proxies-checkers.service';

describe('ProxiesCheckerService', () => {
  let service: ProxiesCheckersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxiesCheckersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
