import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEmployeePage } from './home-employee.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEmployeePageRoutingModule {}
