import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Noticia3Page } from './noticia3.page';

const routes: Routes = [
  {
    path: '',
    component: Noticia3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Noticia3PageRoutingModule {}
