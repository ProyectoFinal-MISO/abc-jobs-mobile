import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabEmployeePage } from './tab-employee.page';

const routes: Routes = [
  {
    path: '',
    component: TabEmployeePage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home-employee'
      },
      {
        path: 'home-employee',
        loadChildren: () => import('../home-employee/home-employee.module').then( m => m.HomeEmployeePageModule)
      },
      {
        path: 'schedule-interview',
        loadChildren: () => import('../schedule-interview/schedule-interview.module').then( m => m.ScheduleInterviewPageModule)
      },
      {
        path: 'interview-results',
        loadChildren: () => import('../interview-results/interview-results.module').then( m => m.InterviewResultsPageModule)
      },
      {
        path: 'technical-results',
        loadChildren: () => import('../technical-results/technical-results.module').then( m => m.TechnicalResultsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabEmployeePageRoutingModule {}
