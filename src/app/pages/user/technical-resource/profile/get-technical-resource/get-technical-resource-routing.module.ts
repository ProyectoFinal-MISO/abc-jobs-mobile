import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetTechnicalResourcePage } from './get-technical-resource.page';

const routes: Routes = [
  {
    path: '',
    component: GetTechnicalResourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetTechnicalResourcePageRoutingModule {}
