import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MinProjectType } from '../model/minProject.type';

@Injectable({
  providedIn: 'root',
})
export class FetchProjectThumbnailService {
  http = inject(HttpClient);

  fetchProjectThumbnail() {
    return this.http.get<Array<MinProjectType>>(
      `http://localhost:8080/project/thumbnail`
    );
  }

  constructor() {}
}
