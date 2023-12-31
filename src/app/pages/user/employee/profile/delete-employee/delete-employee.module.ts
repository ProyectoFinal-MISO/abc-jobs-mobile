import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteEmployeePageRoutingModule } from './delete-employee-routing.module';

import { DeleteEmployeePage } from './delete-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteEmployeePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DeleteEmployeePage]
})
export class DeleteEmployeePageModule {}
