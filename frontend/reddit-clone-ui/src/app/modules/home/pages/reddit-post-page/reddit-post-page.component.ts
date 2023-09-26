import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RedditPostService } from 'app/core/services/reddit-post/reddit-post.service';
import { RedditPost } from 'app/shared/models/reddit-post';
import { map } from 'rxjs';

@Component({
  selector: 'app-reddit-post-page',
  templateUrl: './reddit-post-page.component.html',
  styleUrls: ['./reddit-post-page.component.css'],
})
export class RedditPostPageComponent implements OnInit {
  public redditPost!: RedditPost;

  constructor(
    private activatedRoute: ActivatedRoute,
    public redditPostService: RedditPostService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      const foundRedditPost = this.redditPostService.redditPosts.find(
        (redditPost) => redditPost.redditPostId == queryParams['redditPostId']
      );

      if (foundRedditPost) this.redditPost = foundRedditPost;
    });
  }

  public isAcceptableImage(redditPostMediaType: string) {
    const isAcceptableImage = this.redditPostService.isAcceptableImage(redditPostMediaType);
    return isAcceptableImage;
  }

  public isAcceptableVideo(redditPostMediaType: string) {
    const isAcceptableVideo = this.redditPostService.isAcceptableVideo(redditPostMediaType);
    return isAcceptableVideo;
  }
}
