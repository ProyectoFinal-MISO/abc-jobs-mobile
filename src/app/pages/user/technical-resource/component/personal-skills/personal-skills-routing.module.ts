import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalSkillsPage } from './personal-skills.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalSkillsPageRoutingModule {}
