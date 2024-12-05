import { Component, inject, OnInit, signal, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.checkScreenWidth();
    this.updateProjectListWidth();
    this.fetchThumbnailService.fetchProjectThumbnail().subscribe((data) => {
      this.projectThumbnail.set(data);
    });
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
      this.updateProjectListWidth();
    });
  }

  checkScreenWidth(): void {
    this.isWideScreen.set(window.innerWidth >= 769);
    window.addEventListener('resize', () => {
      this.isWideScreen.set(window.innerWidth >= 769);
    });
  }

  updateProjectListWidth(): void {
    const projectListElement = document.querySelector('app-project-list');
    if (projectListElement) {
      if (this.isWideScreen()) {
        this.renderer.setStyle(projectListElement, 'width', '80%');
        this.renderer.setStyle(projectListElement, 'margin', '0');
      } else {
        this.renderer.setStyle(projectListElement, 'width', '100%');
        this.renderer.setStyle(projectListElement, 'margin', '0 auto');
      }
    }
  }
}
