import { Component } from '@angular/core';
import { NavigationService } from 'app/core/services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private navigationService: NavigationService) {}

  public navigate(url: string) {
    this.navigationService.navigate(url);
  }
}
