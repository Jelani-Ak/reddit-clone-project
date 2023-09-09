import { Component, Input } from '@angular/core';
import { RedditPost } from 'app/shared/models/reddit-post';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css'],
})
export class RedditPostComponent {
  @Input('reddit-post') public redditPost!: RedditPost;

  public imageLoaded: boolean = false;
  public videoLoaded: boolean = false;

  constructor() {}

  public isAcceptableImage(redditPostMediaType: string | undefined) {
    if (redditPostMediaType == 'image/png' || 'image/jpg') {
      this.imageLoaded = true;
      return true;
    }

    return false;
  }

  public isAcceptableVideo(redditPostMediaType: string | undefined) {
    if (redditPostMediaType == 'video/webm') {
      this.videoLoaded = true;
      return true;
    }

    return false;
  }
}
