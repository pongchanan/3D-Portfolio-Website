import { Component } from '@angular/core';
import { MoveAvatarComponent } from '../component/move-avatar/move-avatar.component';
import { ToggleLinkButtonComponent } from '../component/toggle-link-button/toggle-link-button.component';

@Component({
  selector: 'app-description-page',
  imports: [MoveAvatarComponent, ToggleLinkButtonComponent],
  templateUrl: './description-page.component.html',
  styleUrl: './description-page.component.css',
})
export class DescriptionPageComponent {}
