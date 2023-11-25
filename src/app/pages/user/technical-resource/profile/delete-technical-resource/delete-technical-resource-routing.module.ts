import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteTechnicalResourcePage } from './delete-technical-resource.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteTechnicalResourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteTechnicalResourcePageRoutingModule {}
