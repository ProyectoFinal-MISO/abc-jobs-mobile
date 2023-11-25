import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabEmployeePageRoutingModule } from './tab-employee-routing.module';

import { TabEmployeePage } from './tab-employee.page';
import { PrincipalMenuPageModule } from '../principal-menu/principal-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabEmployeePageRoutingModule,
    PrincipalMenuPageModule
  ],
  declarations: [TabEmployeePage]
})
export class TabEmployeePageModule {}
