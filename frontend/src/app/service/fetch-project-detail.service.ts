import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProjectType } from '../model/project.type';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FetchProjectDetailService {
  http = inject(HttpClient);

  fetchProjectDetail(id: string) {
    const backendUrl = environment.backendUrl;
    console.log('Fetching project detail for ID:', id); // Debugging log
    return this.http.get<ProjectType>(`${backendUrl}/project/${id}`);
  }

  constructor() {}
}
