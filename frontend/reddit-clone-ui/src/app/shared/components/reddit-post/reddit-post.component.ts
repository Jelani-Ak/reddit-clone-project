import { Component, Input } from '@angular/core';
import { NavigationService } from 'app/core/services/navigation/navigation.service';
import { RedditPostService } from 'app/core/services/reddit-post/reddit-post.service';
import { RedditPost } from 'app/shared/models/reddit-post';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css'],
})
export class RedditPostComponent {
  @Input('reddit-post') public redditPost!: RedditPost;

  constructor(
    public redditPostService: RedditPostService,
    private navigationService: NavigationService
  ) {}

  public isAcceptableImage(redditPostMediaType: string) {
    const isAcceptableImage = this.redditPostService.isAcceptableImage(redditPostMediaType);
    return isAcceptableImage;
  }

  public isAcceptableVideo(redditPostMediaType: string) {
    const isAcceptableVideo = this.redditPostService.isAcceptableVideo(redditPostMediaType);
    return isAcceptableVideo;
  }

  public viewPost(RedditPost: RedditPost) {
    const queryParams = {
      subRedditName: RedditPost.subRedditName,
      redditPostId: RedditPost.redditPostId,
    };

    this.navigationService.navigate('reddit-post', queryParams);
  }
}
