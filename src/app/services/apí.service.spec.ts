import { TestBed } from '@angular/core/testing';

import { ApíService } from './apí.service';

describe('ApíService', () => {
  let service: ApíService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApíService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
