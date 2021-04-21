import { TestBed } from '@angular/core/testing';

import { UnautRequiredGuard } from './unaut-required.guard';

describe('UnautRequiredGuard', () => {
  let guard: UnautRequiredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnautRequiredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
