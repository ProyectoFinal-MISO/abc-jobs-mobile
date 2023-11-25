import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicalResultsPageRoutingModule } from './technical-results-routing.module';

import { TechnicalResultsPage } from './technical-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalResultsPageRoutingModule
  ],
  declarations: [TechnicalResultsPage]
})
export class TechnicalResultsPageModule {}
