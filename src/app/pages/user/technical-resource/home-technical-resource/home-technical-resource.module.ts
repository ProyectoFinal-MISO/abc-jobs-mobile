import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTechnicalResourcePageRoutingModule } from './home-technical-resource-routing.module';

import { HomeTechnicalResourcePage } from './home-technical-resource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTechnicalResourcePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomeTechnicalResourcePage]
})
export class HomeTechnicalResourcePageModule {}
