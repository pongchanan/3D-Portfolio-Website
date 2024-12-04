import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-website-link-button-white',
  imports: [],
  templateUrl: './website-link-button-white.component.html',
  styleUrl: './website-link-button-white.component.css',
})
export class WebsiteLinkButtonWhiteComponent {
  @Input() linkPath: string = '';
  @Input() buttonText: string = 'Click me';
}
