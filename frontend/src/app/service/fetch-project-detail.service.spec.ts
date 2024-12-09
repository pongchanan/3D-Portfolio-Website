import { TestBed } from '@angular/core/testing';

import { FetchProjectDetailService } from './fetch-project-detail.service';

describe('FetchProjectDetailService', () => {
  let service: FetchProjectDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProjectDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
