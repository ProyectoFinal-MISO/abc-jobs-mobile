import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterviewPageRoutingModule } from './interview-routing.module';

import { InterviewPage } from './interview.page';
import { DetailInterviewPageModule } from '../component/detail-interview/detail-interview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterviewPageRoutingModule,
    ReactiveFormsModule,
    DetailInterviewPageModule
  ],
  declarations: [InterviewPage]
})
export class InterviewPageModule {}
