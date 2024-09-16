import { Component, OnInit } from '@angular/core';
import { Noticia2Service } from '../services/noticia2.service';

@Component({
  selector: 'app-noticia2',
  templateUrl: './noticia2.page.html',
  styleUrls: ['./noticia2.page.scss'],
})
export class Noticia2Page implements OnInit {
  noticias: any[] = [];

  constructor(private noticia2Service: Noticia2Service) {}

  ngOnInit() {
    this.loadNoticias();
  }

  loadNoticias() {
    this.noticia2Service.getNoticias().subscribe((response: any) => {
      this.noticias = response.news; // Ajuste conforme a estrutura dos dados da API
    });
  }
}
