import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleInterviewPageRoutingModule } from './schedule-interview-routing.module';

import { ScheduleInterviewPage } from './schedule-interview.page';
import { CreateInterviewPageModule } from '../component/create-interview/create-interview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleInterviewPageRoutingModule,
    ReactiveFormsModule,
    CreateInterviewPageModule
  ],
  declarations: [ScheduleInterviewPage]
})
export class ScheduleInterviewPageModule {}
