import { TestBed } from '@angular/core/testing';

import { OfferdServicesService } from './offerd-services.service';

describe('OfferdServicesService', () => {
  let service: OfferdServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferdServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
