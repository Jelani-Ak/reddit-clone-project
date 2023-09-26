import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reddit-post-extra-footer-buttons',
  templateUrl: './reddit-post-extra-footer-buttons.component.html',
  styleUrls: ['./reddit-post-extra-footer-buttons.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.15s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.15s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class RedditPostExtraFooterButtonsComponent {
  public isOpen: boolean = false;
}
