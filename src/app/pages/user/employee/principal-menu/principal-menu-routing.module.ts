import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalMenuPage } from './principal-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalMenuPage,
    children: [
      {
        path: 'edit-employee',
        loadChildren: () => import('../profile/edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
      },
      {
        path: 'get-employee',
        loadChildren: () => import('../profile/get-employee/get-employee.module').then( m => m.GetEmployeePageModule)
      },
      {
        path: 'delete-employee',
        loadChildren: () => import('../profile/delete-employee/delete-employee.module').then( m => m.DeleteEmployeePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalMenuPageRoutingModule {}
