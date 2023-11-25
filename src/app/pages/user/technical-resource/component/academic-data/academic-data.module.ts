import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademicDataPageRoutingModule } from './academic-data-routing.module';

import { AcademicDataPage } from './academic-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicDataPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AcademicDataPage],
  exports: [AcademicDataPage],
})
export class AcademicDataPageModule {}
