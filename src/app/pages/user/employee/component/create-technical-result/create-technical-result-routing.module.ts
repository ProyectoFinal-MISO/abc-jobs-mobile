import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTechnicalResultPage } from './create-technical-result.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTechnicalResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTechnicalResultPageRoutingModule {}
