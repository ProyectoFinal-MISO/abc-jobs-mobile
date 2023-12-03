import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicalResultsPageRoutingModule } from './technical-results-routing.module';

import { TechnicalResultsPage } from './technical-results.page';
import { CreateTechnicalResultPageModule } from '../component/create-technical-result/create-technical-result.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalResultsPageRoutingModule,
    ReactiveFormsModule,
    CreateTechnicalResultPageModule
  ],
  declarations: [TechnicalResultsPage]
})
export class TechnicalResultsPageModule {}
