import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailInterviewPageRoutingModule } from './detail-interview-routing.module';

import { DetailInterviewPage } from './detail-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailInterviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetailInterviewPage],
  exports: [DetailInterviewPage],
})
export class DetailInterviewPageModule {}
