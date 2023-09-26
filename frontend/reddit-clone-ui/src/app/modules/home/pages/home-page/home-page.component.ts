import { Component } from '@angular/core';
import { NavigationService, QueryParams } from 'app/core/services/navigation/navigation.service';
import { RedditPostService } from 'app/core/services/reddit-post/reddit-post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [],
})
export class HomePageComponent {
  constructor(
    public redditPostService: RedditPostService,
    private navigationService: NavigationService
  ) {}

  public createPost(action: string | null = null): void {
    const queryParams: QueryParams = { action: action };
    this.navigationService.navigate('submit', queryParams);
  }
}
