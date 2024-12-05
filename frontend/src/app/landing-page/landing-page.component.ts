import { Component, inject, OnInit, signal } from '@angular/core';
import { MoveAvatarComponent } from '../component/move-avatar/move-avatar.component';
import { ProjectListComponent } from '../component/project-list/project-list.component';
import { FetchProjectThumbnailService } from '../service/fetch-project-thumbnail.service';
import { MinProjectType } from '../model/minProject.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [MoveAvatarComponent, ProjectListComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  fetchThumbnailService = inject(FetchProjectThumbnailService);
  projectThumbnail = signal<Array<MinProjectType>>([]);
  isWideScreen = signal<boolean>(true);

  ngOnInit(): void {
    this.checkScreenWidth();
    this.fetchThumbnailService.fetchProjectThumbnail().subscribe((data) => {
      this.projectThumbnail.set(data);
    });
  }

  checkScreenWidth(): void {
    this.isWideScreen.set(window.innerWidth >= 769);
    window.addEventListener('resize', () => {
      this.isWideScreen.set(window.innerWidth >= 769);
    });
  }
}
