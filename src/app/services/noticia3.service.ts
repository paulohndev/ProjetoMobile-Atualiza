import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Noticia3Service {
  apiKey = '2a1b2e0f-d2b3-4b3c-aa28-aca21f2eac83';
  apiUrl = 'https://content.guardianapis.com/search';

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    const url = `${this.apiUrl}?api-key=${this.apiKey}`;
    return this.http.get(url);
  }
}
