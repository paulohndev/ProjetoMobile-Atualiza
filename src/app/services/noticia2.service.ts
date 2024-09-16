import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Noticia2Service {
  private apiKey = 'zUkYYu3ZYzojpEY_d9kCCAIL73l9H7ZXzqcY5cg3kU6wOuEz'; // Substitua pela sua chave da API Currents
  private apiUrl = 'https://api.currentsapi.services/v1/latest-news';

  constructor(private http: HttpClient) {}

  getNoticias(language: string = 'pt'): Observable<any> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&language=${language}`;
    return this.http.get<any>(url);
  }
}
