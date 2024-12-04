import { Component, inject, OnInit, signal } from '@angular/core';
import { MoveAvatarComponent } from '../component/move-avatar/move-avatar.component';
import { FetchProjectDetailService } from '../service/fetch-project-detail.service';
import { ProjectType } from '../model/project.type';
import { ActivatedRoute } from '@angular/router';
import { WebsiteLinkButtonBlackComponent } from '../component/website-link-button-black/website-link-button-black.component';
import { WebsiteLinkButtonWhiteComponent } from '../component/website-link-button-white/website-link-button-white.component';

@Component({
  selector: 'app-description-page',
  imports: [
    MoveAvatarComponent,
    WebsiteLinkButtonBlackComponent,
    WebsiteLinkButtonWhiteComponent,
  ],
  templateUrl: './description-page.component.html',
  styleUrl: './description-page.component.css',
})
export class DescriptionPageComponent implements OnInit {
  fetchDetailService = inject(FetchProjectDetailService);
  route = inject(ActivatedRoute);
  projectDetail = signal<ProjectType>({} as ProjectType);
  isLoading = true;

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.fetchDetailService.fetchProjectDetail(projectId).subscribe({
        next: (data) => {
          this.projectDetail.set(data);
        },
        error: (err) => {
          console.error('Failed to fetch project details:', err);
        },
      });
    }
  }

  getImageURL(imageBytes: string): string {
    const byteCharacters = atob(imageBytes);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    return URL.createObjectURL(blob);
  }
}
