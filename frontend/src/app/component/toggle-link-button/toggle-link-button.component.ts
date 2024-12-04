import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-link-button',
  imports: [CommonModule],
  templateUrl: './toggle-link-button.component.html',
  styleUrls: ['./toggle-link-button.component.css'],
})
export class ToggleLinkButtonComponent {
  @Input() buttonColor: 'black' | 'not-show' = 'black';
  @Input() linkPath: string = '';
  @Input() buttonText: string = 'Click me';

  onButtonClick() {
    if (this.linkPath) {
      window.location.href = this.linkPath;
    }
  }
}
