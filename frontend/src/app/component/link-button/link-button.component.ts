import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  imports: [RouterModule, CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css',
})
export class LinkButtonComponent {
  @Input() linkPath: string = '';
  @Input() buttonText: string = 'Click me';
  @Input() isExternal: boolean = false;
  @Input() buttonStyle: 'black' | 'white' = 'white';
  @Input() borderless: boolean = false;
  @Input() fullWidth: boolean = false;
}
