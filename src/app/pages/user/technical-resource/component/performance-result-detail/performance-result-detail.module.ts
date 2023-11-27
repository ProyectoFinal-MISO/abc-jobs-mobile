import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformanceResultDetailPageRoutingModule } from './performance-result-detail-routing.module';

import { PerformanceResultDetailPage } from './performance-result-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceResultDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PerformanceResultDetailPage],
  exports: [PerformanceResultDetailPage],
})
export class PerformanceResultDetailPageModule {}
