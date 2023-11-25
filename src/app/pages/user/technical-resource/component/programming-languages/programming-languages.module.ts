import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammingLanguagesPageRoutingModule } from './programming-languages-routing.module';

import { ProgrammingLanguagesPage } from './programming-languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammingLanguagesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProgrammingLanguagesPage],
  exports: [ProgrammingLanguagesPage],
})
export class ProgrammingLanguagesPageModule {}
