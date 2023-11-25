import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTechnicalResourcePage } from './home-technical-resource.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTechnicalResourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTechnicalResourcePageRoutingModule {}
