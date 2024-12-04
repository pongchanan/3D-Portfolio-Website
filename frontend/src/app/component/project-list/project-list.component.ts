import { Component, Input } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { MinProjectType } from '../../model/minProject.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  @Input() projectsArray!: Array<MinProjectType>;
  currentPage: number = 1;
  projectsPerPage: number = 3;

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
