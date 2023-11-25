import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalDataPageRoutingModule } from './professional-data-routing.module';

import { ProfessionalDataPage } from './professional-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalDataPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfessionalDataPage],
  exports: [ProfessionalDataPage],
})
export class ProfessionalDataPageModule {}
