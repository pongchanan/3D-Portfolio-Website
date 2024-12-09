import { Component, Input, OnInit } from '@angular/core';
import { MinProjectType } from '../../model/minProject.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project!: MinProjectType;

  constructor(private router: Router) {}

  onCardClick() {
    if (this.project?.id) {
      this.router.navigate(['project', this.project.id]);
    }
  }
}
