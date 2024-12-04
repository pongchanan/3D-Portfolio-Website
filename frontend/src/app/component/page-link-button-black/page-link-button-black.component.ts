import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-link-button-black',
  imports: [],
  templateUrl: './page-link-button-black.component.html',
  styleUrl: './page-link-button-black.component.css',
})
export class PageLinkButtonBlackComponent {
  @Input() linkPath: string = '';
  @Input() buttonText: string = 'Click me';
}
