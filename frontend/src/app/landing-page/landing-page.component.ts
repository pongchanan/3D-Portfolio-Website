import { Component, inject, OnInit, signal } from '@angular/core';
import { MoveAvatarComponent } from '../component/move-avatar/move-avatar.component';
import { ProjectListComponent } from '../component/project-list/project-list.component';
import { FetchProjectThumbnailService } from '../service/fetch-project-thumbnail.service';
import { MinProjectType } from '../model/minProject.type';

@Component({
  selector: 'app-landing-page',
  imports: [MoveAvatarComponent, ProjectListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  fetchThumbnailService = inject(FetchProjectThumbnailService);
  projectThumbnail = signal<Array<MinProjectType>>([]);

  ngOnInit(): void {
    this.fetchThumbnailService.fetchProjectThumbnail().subscribe((data) => {
      this.projectThumbnail.set(data);
    });
  }
}
