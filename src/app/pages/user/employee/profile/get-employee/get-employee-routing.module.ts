import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetEmployeePage } from './get-employee.page';

const routes: Routes = [
  {
    path: '',
    component: GetEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetEmployeePageRoutingModule {}
