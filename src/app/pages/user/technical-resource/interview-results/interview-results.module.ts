import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterviewResultsPageRoutingModule } from './interview-results-routing.module';

import { InterviewResultsPage } from './interview-results.page';
import { DetailInterviewResultPageModule } from '../component/detail-interview-result/detail-interview-result.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterviewResultsPageRoutingModule,
    ReactiveFormsModule,
    DetailInterviewResultPageModule
  ],
  declarations: [InterviewResultsPage]
})
export class InterviewResultsPageModule {}
