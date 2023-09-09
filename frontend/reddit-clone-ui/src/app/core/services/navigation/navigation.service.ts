import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  public navigate(url: string, queryParams: { [key: string]: any } | null = null): void {
    url = url.toLowerCase();
    this.router
      .navigate([`/${url}`], {
        queryParams: queryParams,
      })
      .then(
        () => {
          queryParams
            ? console.log(`Navigated to ${url}, '${Object.values(queryParams)}'`)
            : console.log(`Navigated to ${url}`);
        },
        (error) => {
          console.log(`Failed to navigate to ${url}`, error);
        }
      );
  }
}
