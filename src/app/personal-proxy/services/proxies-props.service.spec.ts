import { TestBed } from '@angular/core/testing';

import { ProxiesPropsService } from './proxies-props.service';

describe('ProxiesPropsService', () => {
  let service: ProxiesPropsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxiesPropsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
