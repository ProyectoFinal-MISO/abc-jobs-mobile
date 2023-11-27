import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterviewResultsPageRoutingModule } from './interview-results-routing.module';

import { InterviewResultsPage } from './interview-results.page';
import { CreateResultInterviewPage } from '../component/create-result-interview/create-result-interview.page';
import { CreateResultInterviewPageModule } from '../component/create-result-interview/create-result-interview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterviewResultsPageRoutingModule,
    ReactiveFormsModule,
    CreateResultInterviewPageModule
  ],
  declarations: [InterviewResultsPage]
})
export class InterviewResultsPageModule {}
