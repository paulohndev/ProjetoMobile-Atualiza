import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosPage } from './sobre-nos.page';

const routes: Routes = [
  {
    path: '',
    component: SobreNosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreNosPageRoutingModule {}
