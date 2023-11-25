import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetTechnicalResourcePageRoutingModule } from './get-technical-resource-routing.module';

import { GetTechnicalResourcePage } from './get-technical-resource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetTechnicalResourcePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GetTechnicalResourcePage]
})
export class GetTechnicalResourcePageModule {}
