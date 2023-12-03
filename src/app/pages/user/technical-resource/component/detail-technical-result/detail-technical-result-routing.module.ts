import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTechnicalResultPage } from './detail-technical-result.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTechnicalResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTechnicalResultPageRoutingModule {}
