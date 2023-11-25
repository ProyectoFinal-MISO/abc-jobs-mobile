import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterviewResultsPageRoutingModule } from './interview-results-routing.module';

import { InterviewResultsPage } from './interview-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterviewResultsPageRoutingModule
  ],
  declarations: [InterviewResultsPage]
})
export class InterviewResultsPageModule {}
