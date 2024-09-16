import { Component, OnInit } from '@angular/core';
import { Noticia3Service } from '../services/noticia3.service';

@Component({
  selector: 'app-noticia3',
  templateUrl: './noticia3.page.html',
  styleUrls: ['./noticia3.page.scss'],
})
export class Noticia3Page implements OnInit {
  noticias: any[] = [];

  constructor(private noticia3Service: Noticia3Service) {}

  ngOnInit() {
    this.loadNoticias();
  }

  loadNoticias() {
    this.noticia3Service.getNoticias().subscribe((response: any) => {
      if (response && response.response && response.response.results) {
        this.noticias = response.response.results;
      } else {
        console.error('Erro ao carregar notícias:', response);
      }
    }, error => {
      console.error('Erro ao chamar a API:', error);
    });
  }
}
