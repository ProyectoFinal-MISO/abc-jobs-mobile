import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEmployeePageRoutingModule } from './home-employee-routing.module';

import { HomeEmployeePage } from './home-employee.page';
import { PrincipalMenuPage } from '../principal-menu/principal-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEmployeePageRoutingModule
  ],
  declarations: [HomeEmployeePage]
})
export class HomeEmployeePageModule {}
