import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type QueryParams = { 
  queryParams: { [key: string]: any } 
} | {};

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  public navigate(url: string, queryParams: QueryParams = {}): void {
    url = url.toLowerCase();
    
    this.router.navigate([`/${url}`], { queryParams: queryParams }).then(
      () => {
        queryParams
          ? console.log(`Navigated to ${url}, '${Object.values(queryParams)}'`)
          : console.log(`Navigated to ${url}`);
      },
      (error) => {
        queryParams
          ? console.log(`Failed to navigate to ${url}, '${Object.values(queryParams)}'`)
          : console.log(`Failed to navigate to ${url}`, error);
      }
    );
  }
}
