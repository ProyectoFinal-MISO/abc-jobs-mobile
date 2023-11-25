import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupTechnicalResourcePage } from './singup-technical-resource.page';

const routes: Routes = [
  {
    path: '',
    component: SingupTechnicalResourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingupTechnicalResourcePageRoutingModule {}
