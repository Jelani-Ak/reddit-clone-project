import { Injectable } from '@angular/core';
import { RedditPost } from 'app/shared/models/reddit-post';

@Injectable({
  providedIn: 'root',
})
export class RedditPostService {
  public imageLoaded: boolean = false;
  public videoLoaded: boolean = false;
  public redditPosts: RedditPost[] = [];

  constructor() {
    this.setupPlaceholders();
  }

  public isAcceptableImage(redditPostMediaType: string) {
    const acceptableImageTypes = ['image/png', 'image/jpg'];
    const isAcceptable = acceptableImageTypes.includes(redditPostMediaType);

    if (isAcceptable) {
      this.imageLoaded = true;
    }

    return isAcceptable;
  }

  public isAcceptableVideo(redditPostMediaType: string) {
    const acceptableVideoTypes = ['video/webm', 'video/mp4'];
    const isAcceptable = acceptableVideoTypes.includes(redditPostMediaType);

    if (isAcceptable) {
      this.videoLoaded = true;
    }

    return isAcceptable;
  }

  private setupPlaceholders() {
    for (let index = 0; index < 10; index++) {
      this.redditPosts.push({
        redditPostId: `${index} ID`,
        subRedditName: `SUBREDDIT TITLE ${index}`,
        authorId: `AUTHOR ID ${index}`,
        authorName: `AUTHOR NAME ${index}`,
        media: {
          mediaKey: `MEDIA KEY ${index}`,
          mediaUrl:
            'https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/shape-of-square-1612779244.png',
          mediaType: 'image/jpg',
        },
        title: `TITLE ${index}`,
        content: `CONTENT ${index}`,
        redditFlair: {
          flairName: `REDDIT FLAIR ${index}`,
          flairIcon: undefined,
          flairColour: `#FFFFFF`,
        },
        likes: index,
        dislikes: index,
        comments: [],
        dateOfCreation: new Date(),
      });
    }
  }
}
