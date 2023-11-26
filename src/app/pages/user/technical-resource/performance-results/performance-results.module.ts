import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformanceResultsPageRoutingModule } from './performance-results-routing.module';

import { PerformanceResultsPage } from './performance-results.page';
import { PersonalSkillsPageModule } from '../component/personal-skills/personal-skills.module';
import { PerformanceResultDetailPageModule } from '../component/performance-result-detail/performance-result-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceResultsPageRoutingModule,
    ReactiveFormsModule,
    PerformanceResultDetailPageModule,
  ],
  declarations: [PerformanceResultsPage]
})
export class PerformanceResultsPageModule {}
