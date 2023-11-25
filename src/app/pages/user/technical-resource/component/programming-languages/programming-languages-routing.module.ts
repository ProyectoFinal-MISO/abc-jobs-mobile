import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammingLanguagesPage } from './programming-languages.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammingLanguagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammingLanguagesPageRoutingModule {}
