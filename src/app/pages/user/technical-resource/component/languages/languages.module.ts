import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagesPageRoutingModule } from './languages-routing.module';

import { LanguagesPage } from './languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LanguagesPage],
  exports: [LanguagesPage],
})
export class LanguagesPageModule {}
