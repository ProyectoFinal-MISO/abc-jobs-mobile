import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalMenuPageRoutingModule } from './principal-menu-routing.module';

import { PrincipalMenuPage } from './principal-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalMenuPageRoutingModule
  ],
  declarations: [PrincipalMenuPage],
  exports: [PrincipalMenuPage],
})
export class PrincipalMenuPageModule {}
