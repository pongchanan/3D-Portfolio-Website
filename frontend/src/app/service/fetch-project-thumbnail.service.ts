import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MinProjectType } from '../model/minProject.type';

@Injectable({
  providedIn: 'root',
})
export class FetchProjectThumbnailService {
  http = inject(HttpClient);

  fetchProjectThumbnail() {
    const backendUrl = process.env['REACT_APP_BACKEND_URL'];
    return this.http.get<Array<MinProjectType>>(
      `${backendUrl}/project/thumbnail`
    );
  }

  constructor() {}
}
