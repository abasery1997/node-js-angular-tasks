import { TestBed } from '@angular/core/testing';

import { AutRequiredGuard } from './aut-required.guard';

describe('AutRequiredGuard', () => {
  let guard: AutRequiredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutRequiredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
