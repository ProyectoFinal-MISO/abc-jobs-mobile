import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupEmployeePage } from './singup-employee.page';

const routes: Routes = [
  {
    path: '',
    component: SingupEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingupEmployeePageRoutingModule {}
