import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTechnicalResourcePageRoutingModule } from './edit-technical-resource-routing.module';

import { EditTechnicalResourcePage } from './edit-technical-resource.page';
import { PersonalSkillsPageModule } from '../../component/personal-skills/personal-skills.module';
import { LanguagesPageModule } from '../../component/languages/languages.module';
import { ProgrammingLanguagesPageModule } from '../../component/programming-languages/programming-languages.module';
import { AcademicDataPageModule } from '../../component/academic-data/academic-data.module';
import { ProfessionalDataPageModule } from '../../component/professional-data/professional-data.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTechnicalResourcePageRoutingModule,
    ReactiveFormsModule,
    PersonalSkillsPageModule,
    LanguagesPageModule,
    ProgrammingLanguagesPageModule,
    AcademicDataPageModule,
    ProfessionalDataPageModule,
  ],
  declarations: [EditTechnicalResourcePage]
})
export class EditTechnicalResourcePageModule {}
