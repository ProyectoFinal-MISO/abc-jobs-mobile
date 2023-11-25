import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicDataPage } from './academic-data.page';

const routes: Routes = [
  {
    path: '',
    component: AcademicDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicDataPageRoutingModule {}
