import { Component } from '@angular/core';
import { MoveAvatarComponent } from '../component/move-avatar/move-avatar.component';
import { ProjectListComponent } from '../component/project-list/project-list.component';

@Component({
  selector: 'app-landing-page',
  imports: [MoveAvatarComponent, ProjectListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
