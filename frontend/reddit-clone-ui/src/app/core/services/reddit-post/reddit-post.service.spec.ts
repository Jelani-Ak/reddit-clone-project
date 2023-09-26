import { TestBed } from '@angular/core/testing';

import { RedditPostService } from './reddit-post.service';

describe('RedditPostService', () => {
  let service: RedditPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
