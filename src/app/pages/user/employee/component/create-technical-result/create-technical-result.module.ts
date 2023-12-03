import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTechnicalResultPageRoutingModule } from './create-technical-result-routing.module';

import { CreateTechnicalResultPage } from './create-technical-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTechnicalResultPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateTechnicalResultPage],
  exports: [CreateTechnicalResultPage]
})
export class CreateTechnicalResultPageModule {}
