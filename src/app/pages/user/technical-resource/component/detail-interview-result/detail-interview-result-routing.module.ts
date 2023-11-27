import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailInterviewResultPage } from './detail-interview-result.page';

const routes: Routes = [
  {
    path: '',
    component: DetailInterviewResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailInterviewResultPageRoutingModule {}
