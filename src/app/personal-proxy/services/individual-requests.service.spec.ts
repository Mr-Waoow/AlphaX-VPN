import { TestBed } from '@angular/core/testing';

import { IndividualRequestsService } from './individual-requests.service';

describe('IndividualRequestsService', () => {
  let service: IndividualRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
