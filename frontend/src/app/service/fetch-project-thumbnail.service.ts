import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MinProjectType } from '../model/minProject.type';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FetchProjectThumbnailService {
  http = inject(HttpClient);

  fetchProjectThumbnail() {
    const backendUrl = environment.backendUrl;
    return this.http.get<Array<MinProjectType>>(
      `${backendUrl}/project/thumbnail`
    );
  }

  constructor() {}
}
