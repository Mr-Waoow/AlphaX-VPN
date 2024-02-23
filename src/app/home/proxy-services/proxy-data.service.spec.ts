import { TestBed } from '@angular/core/testing';

import { ProxyDataService } from './proxy-data.service';

describe('ProxyDataService', () => {
  let service: ProxyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
