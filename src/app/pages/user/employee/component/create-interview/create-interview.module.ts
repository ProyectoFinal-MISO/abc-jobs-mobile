import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateInterviewPageRoutingModule } from './create-interview-routing.module';

import { CreateInterviewPage } from './create-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateInterviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateInterviewPage],
  exports: [CreateInterviewPage],
})
export class CreateInterviewPageModule {}
