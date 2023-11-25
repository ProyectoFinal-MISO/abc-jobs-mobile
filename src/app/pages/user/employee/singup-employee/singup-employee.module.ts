import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupEmployeePageRoutingModule } from './singup-employee-routing.module';

import { SingupEmployeePage } from './singup-employee.page';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingupEmployeePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SingupEmployeePage]
})
export class SingupEmployeePageModule {}
