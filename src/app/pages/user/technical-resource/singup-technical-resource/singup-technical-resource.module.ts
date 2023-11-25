import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupTechnicalResourcePageRoutingModule } from './singup-technical-resource-routing.module';

import { SingupTechnicalResourcePage } from './singup-technical-resource.page';
import { PersonalSkillsPageModule } from '../component/personal-skills/personal-skills.module';
import { LanguagesPageModule } from '../component/languages/languages.module';
import { ProgrammingLanguagesPageModule } from '../component/programming-languages/programming-languages.module';
import { AcademicDataPageModule } from '../component/academic-data/academic-data.module';
import { ProfessionalDataPage } from '../component/professional-data/professional-data.page';
import { ProfessionalDataPageModule } from '../component/professional-data/professional-data.module';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingupTechnicalResourcePageRoutingModule,
    ReactiveFormsModule,
    PersonalSkillsPageModule,
    LanguagesPageModule,
    ProgrammingLanguagesPageModule,
    AcademicDataPageModule,
    ProfessionalDataPageModule,
  ],
  declarations: [SingupTechnicalResourcePage]
})
export class SingupTechnicalResourcePageModule {}
