import { TestBed } from '@angular/core/testing';

import { ParentUserService } from './parent-user.service';

describe('ParentUserService', () => {
  let service: ParentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
