import { TestBed } from '@angular/core/testing';

import { FreeProxiesService } from './free-proxies.service';

describe('FreeProxiesService', () => {
  let service: FreeProxiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeProxiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
