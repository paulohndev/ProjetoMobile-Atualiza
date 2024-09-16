import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Noticia3PageRoutingModule } from './noticia3-routing.module';
import { Noticia3Page } from './noticia3.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noticia3PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Noticia3Page]
})
export class Noticia3PageModule {}
