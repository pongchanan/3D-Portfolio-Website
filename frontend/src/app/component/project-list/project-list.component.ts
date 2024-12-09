import { Component, Input, HostListener } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { MinProjectType } from '../../model/minProject.type';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  @Input() projectsArray!: Array<MinProjectType>;
  currentPage: number = 1;
  projectsPerPage: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.projectsPerPage = this.getProjectsPerPage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.projectsPerPage = this.getProjectsPerPage();
    }
  }

  getProjectsPerPage(): number {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth < 769 ? 5 : 3;
    }
    return 3; // Default value for server-side rendering
  }

  get paginatedProjects() {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    return this.projectsArray.slice(
      startIndex,
      startIndex + this.projectsPerPage
    );
  }

  get totalPages() {
    return Math.ceil(this.projectsArray.length / this.projectsPerPage);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage * this.projectsPerPage < this.projectsArray.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
