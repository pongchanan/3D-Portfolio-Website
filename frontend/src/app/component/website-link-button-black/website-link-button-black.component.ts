import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-website-link-button-black',
  imports: [],
  templateUrl: './website-link-button-black.component.html',
  styleUrl: './website-link-button-black.component.css',
})
export class WebsiteLinkButtonBlackComponent {
  @Input() linkPath: string = '';
  @Input() buttonText: string = 'Click me';
}
