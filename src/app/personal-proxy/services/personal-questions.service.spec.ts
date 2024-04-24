import { TestBed } from '@angular/core/testing';

import { PersonalQuestionsService } from './personal-questions.service';

describe('PersonalQuestionsService', () => {
  let service: PersonalQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
