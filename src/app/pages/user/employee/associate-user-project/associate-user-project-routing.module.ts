import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociateUserProjectPage } from './associate-user-project.page';

const routes: Routes = [
  {
    path: '',
    component: AssociateUserProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociateUserProjectPageRoutingModule {}
