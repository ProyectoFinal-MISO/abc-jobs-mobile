import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTechnicalResultPageRoutingModule } from './detail-technical-result-routing.module';

import { DetailTechnicalResultPage } from './detail-technical-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTechnicalResultPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetailTechnicalResultPage],
  exports: [DetailTechnicalResultPage]
})
export class DetailTechnicalResultPageModule {}
