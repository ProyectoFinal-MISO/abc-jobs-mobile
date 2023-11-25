import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalSkillsPageRoutingModule } from './personal-skills-routing.module';

import { PersonalSkillsPage } from './personal-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalSkillsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonalSkillsPage],
  exports: [PersonalSkillsPage],
})
export class PersonalSkillsPageModule {}
