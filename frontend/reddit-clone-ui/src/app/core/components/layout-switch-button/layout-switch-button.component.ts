import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-switch-button',
  templateUrl: './layout-switch-button.component.html',
  styleUrls: ['./layout-switch-button.component.css'],
})
export class LayoutSwitchButtonComponent {
  public isOpen: boolean = false;
}
