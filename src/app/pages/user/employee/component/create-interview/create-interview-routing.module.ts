import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateInterviewPage } from './create-interview.page';

const routes: Routes = [
  {
    path: '',
    component: CreateInterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateInterviewPageRoutingModule {}
