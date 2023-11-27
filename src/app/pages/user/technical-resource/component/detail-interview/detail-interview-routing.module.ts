import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailInterviewPage } from './detail-interview.page';

const routes: Routes = [
  {
    path: '',
    component: DetailInterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailInterviewPageRoutingModule {}
