import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociateUserProjectPageRoutingModule } from './associate-user-project-routing.module';

import { AssociateUserProjectPage } from './associate-user-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociateUserProjectPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AssociateUserProjectPage]
})
export class AssociateUserProjectPageModule {}
