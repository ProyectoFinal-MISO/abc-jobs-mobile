import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateResultInterviewPageRoutingModule } from './create-result-interview-routing.module';

import { CreateResultInterviewPage } from './create-result-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateResultInterviewPageRoutingModule
  ],
  declarations: [CreateResultInterviewPage]
})
export class CreateResultInterviewPageModule {}
