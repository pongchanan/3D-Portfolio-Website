import { TestBed } from '@angular/core/testing';

import { FetchProjectThumbnailService } from './fetch-project-thumbnail.service';

describe('FetchProjectThumbnailService', () => {
  let service: FetchProjectThumbnailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProjectThumbnailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
