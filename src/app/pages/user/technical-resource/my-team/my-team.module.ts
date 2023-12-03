import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTeamPageRoutingModule } from './my-team-routing.module';

import { MyTeamPage } from './my-team.page';
import { ProjectDetailPageModule } from '../component/project-detail/project-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTeamPageRoutingModule,
    ReactiveFormsModule,
    ProjectDetailPageModule,
  ],
  declarations: [MyTeamPage]
})
export class MyTeamPageModule {}
