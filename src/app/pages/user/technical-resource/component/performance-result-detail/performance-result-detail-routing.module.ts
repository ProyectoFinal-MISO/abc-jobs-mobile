import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceResultDetailPage } from './performance-result-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PerformanceResultDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceResultDetailPageRoutingModule {}
