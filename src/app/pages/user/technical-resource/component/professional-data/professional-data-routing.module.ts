import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalDataPage } from './professional-data.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalDataPageRoutingModule {}
