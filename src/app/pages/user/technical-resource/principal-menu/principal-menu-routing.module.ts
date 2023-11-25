import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalMenuPage } from './principal-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalMenuPage,
    children: [
      {
        path: 'edit-technical-resource',
        loadChildren: () => import('../profile/edit-technical-resource/edit-technical-resource.module').then( m => m.EditTechnicalResourcePageModule)
      },
      {
        path: 'get-technical-resource',
        loadChildren: () => import('../profile/get-technical-resource/get-technical-resource.module').then( m => m.GetTechnicalResourcePageModule)
      },
      {
        path: 'delete-technical-resource',
        loadChildren: () => import('../profile/delete-technical-resource/delete-technical-resource.module').then( m => m.DeleteTechnicalResourcePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalMenuPageRoutingModule {}
