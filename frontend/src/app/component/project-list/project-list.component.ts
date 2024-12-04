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
}
