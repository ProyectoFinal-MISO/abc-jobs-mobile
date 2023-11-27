import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateResultInterviewPage } from './create-result-interview.page';

const routes: Routes = [
  {
    path: '',
    component: CreateResultInterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateResultInterviewPageRoutingModule {}
