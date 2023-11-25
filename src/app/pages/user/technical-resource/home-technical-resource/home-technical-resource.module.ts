import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTechnicalResourcePageRoutingModule } from './home-technical-resource-routing.module';

import { HomeTechnicalResourcePage } from './home-technical-resource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTechnicalResourcePageRoutingModule
  ],
  declarations: [HomeTechnicalResourcePage]
})
export class HomeTechnicalResourcePageModule {}
