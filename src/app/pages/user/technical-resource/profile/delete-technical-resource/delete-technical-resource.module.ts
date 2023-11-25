import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteTechnicalResourcePageRoutingModule } from './delete-technical-resource-routing.module';

import { DeleteTechnicalResourcePage } from './delete-technical-resource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteTechnicalResourcePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DeleteTechnicalResourcePage]
})
export class DeleteTechnicalResourcePageModule {}
