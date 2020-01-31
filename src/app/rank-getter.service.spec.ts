import { TestBed } from '@angular/core/testing';

import { RankGetterService } from './rank-getter.service';

describe('RankGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankGetterService = TestBed.get(RankGetterService);
    expect(service).toBeTruthy();
  });
});
