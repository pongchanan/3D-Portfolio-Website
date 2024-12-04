import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-link-button-white',
  imports: [RouterModule],
  templateUrl: './page-link-button-white.component.html',
  styleUrl: './page-link-button-white.component.css',
})
export class PageLinkButtonWhiteComponent {
  @Input() linkPath: string = '';
  @Input() buttonText: string = 'Click me';
}
