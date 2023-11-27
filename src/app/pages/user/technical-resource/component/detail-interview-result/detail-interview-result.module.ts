import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailInterviewResultPageRoutingModule } from './detail-interview-result-routing.module';

import { DetailInterviewResultPage } from './detail-interview-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailInterviewResultPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetailInterviewResultPage],
  exports: [DetailInterviewResultPage],
})
export class DetailInterviewResultPageModule {}
