import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabTechnicalResourcePage } from './tab-technical-resource.page';

const routes: Routes = [
  {
    path: '',
    component: TabTechnicalResourcePage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home-technical-resource'
      },
      {
        path: 'home-technical-resource',
        loadChildren: () => import('../home-technical-resource/home-technical-resource.module').then( m => m.HomeTechnicalResourcePageModule)
      },
      {
        path: 'interview',
        loadChildren: () => import('../interview/interview.module').then( m => m.InterviewPageModule)
      },
      {
        path: 'interview-results',
        loadChildren: () => import('../interview-results/interview-results.module').then( m => m.InterviewResultsPageModule)
      },
      {
        path: 'performance-results',
        loadChildren: () => import('../performance-results/performance-results.module').then( m => m.PerformanceResultsPageModule)
      },
      {
        path: 'technical-results',
        loadChildren: () => import('../technical-results/technical-results.module').then( m => m.TechnicalResultsPageModule)
      },
      {
        path: 'my-team',
        loadChildren: () => import('../my-team/my-team.module').then( m => m.MyTeamPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTechnicalResourcePageRoutingModule {}
