import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnicalResultsPage } from './technical-results.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalResultsPageRoutingModule {}
