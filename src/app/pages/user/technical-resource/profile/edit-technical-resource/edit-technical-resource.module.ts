import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTechnicalResourcePageRoutingModule } from './edit-technical-resource-routing.module';

import { EditTechnicalResourcePage } from './edit-technical-resource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTechnicalResourcePageRoutingModule
  ],
  declarations: [EditTechnicalResourcePage]
})
export class EditTechnicalResourcePageModule {}
