import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = '643727a1f9ea47dfb1a9a28120b6874c';
  apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getTopHeadlines(category: string): Observable<any> {
    const url = `${this.apiUrl}?category=${category}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
