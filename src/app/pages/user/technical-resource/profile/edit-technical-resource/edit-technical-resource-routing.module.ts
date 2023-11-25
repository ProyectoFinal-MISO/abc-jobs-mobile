import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTechnicalResourcePage } from './edit-technical-resource.page';

const routes: Routes = [
  {
    path: '',
    component: EditTechnicalResourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTechnicalResourcePageRoutingModule {}
