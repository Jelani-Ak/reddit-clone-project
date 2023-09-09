import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/core/services/navigation/navigation.service';
import { RedditPost } from 'app/shared/models/reddit-post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [],
})
export class HomePageComponent implements OnInit {
  public redditPosts: RedditPost[] = [];

  constructor(private navigationService: NavigationService) {}

  public ngOnInit(): void {
    this.setupPlaceholders();
  }

  public createPost(action: string | null = null): void {
    const queryParams = { action: action };
    this.navigationService.navigate("submit", queryParams);
  }

  private setupPlaceholders(): void {
    for (let index = 0; index < 10; index++) {
      this.redditPosts.push({
        redditPostId: `${index} ID`,
        subRedditName: `SUBREDDIT TITLE ${index}`,
        authorId: `AUTHOR ID ${index}`,
        authorName: `AUTHOR NAME ${index}`,
        media: undefined,
        title: `TITLE ${index}`,
        content: `CONTENT ${index}`,
        redditFlair: {
          flairName: `REDDIT FLAIR ${index}`,
          flairIcon: undefined,
          flairColour: `#FFFFFF`
        },
        likes: index,
        dislikes: index,
        comments: [],
        dateOfCreation: new Date(),
      });
    }
  }
}
