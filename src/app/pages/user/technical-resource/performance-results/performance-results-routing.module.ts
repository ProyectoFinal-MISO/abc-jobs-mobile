import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceResultsPage } from './performance-results.page';

const routes: Routes = [
  {
    path: '',
    component: PerformanceResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceResultsPageRoutingModule {}
