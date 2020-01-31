import { TestBed } from '@angular/core/testing';

import { TeamGetterService } from './team-getter.service';

describe('TeamGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamGetterService = TestBed.get(TeamGetterService);
    expect(service).toBeTruthy();
  });
});
