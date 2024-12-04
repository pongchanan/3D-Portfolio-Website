import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-website-nav-button-white',
  imports: [],
  templateUrl: './website-nav-button-white.component.html',
  styleUrl: './website-nav-button-white.component.css',
})
export class WebsiteNavButtonWhiteComponent {
  @Input() linkPath: string = '';
  @Input() buttonText: string = 'Click me';
}
