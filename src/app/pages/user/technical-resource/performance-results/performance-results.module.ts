import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformanceResultsPageRoutingModule } from './performance-results-routing.module';

import { PerformanceResultsPage } from './performance-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceResultsPageRoutingModule
  ],
  declarations: [PerformanceResultsPage]
})
export class PerformanceResultsPageModule {}
