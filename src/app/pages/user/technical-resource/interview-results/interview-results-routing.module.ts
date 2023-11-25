import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterviewResultsPage } from './interview-results.page';

const routes: Routes = [
  {
    path: '',
    component: InterviewResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewResultsPageRoutingModule {}
