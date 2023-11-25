import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTechnicalResourcePageRoutingModule } from './tab-technical-resource-routing.module';

import { TabTechnicalResourcePage } from './tab-technical-resource.page';
import { PrincipalMenuPageModule } from '../principal-menu/principal-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabTechnicalResourcePageRoutingModule,
    PrincipalMenuPageModule
  ],
  declarations: [TabTechnicalResourcePage]
})
export class TabTechnicalResourcePageModule {}
