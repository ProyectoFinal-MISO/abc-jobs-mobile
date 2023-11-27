import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalMenuPageModule } from './pages/user/employee/principal-menu/principal-menu.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'begin',
    pathMatch: 'full'
  },
  {
    path: 'begin',
    loadChildren: () => import('./pages/begin/begin.module').then( m => m.BeginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'singup-employee',
    loadChildren: () => import('./pages/user/employee/singup-employee/singup-employee.module').then( m => m.SingupEmployeePageModule)
  },
  {
    path: 'singup-technical-resource',
    loadChildren: () => import('./pages/user/technical-resource/singup-technical-resource/singup-technical-resource.module').then( m => m.SingupTechnicalResourcePageModule)
  },
  {
    path: 'tab-employee',
    loadChildren: () => import('./pages/user/employee/tab-employee/tab-employee.module').then( m => m.TabEmployeePageModule)
  },
  {
    path: 'tab-technical-resource',
    loadChildren: () => import('./pages/user/technical-resource/tab-technical-resource/tab-technical-resource.module').then( m => m.TabTechnicalResourcePageModule)
  },
  {
    path: 'principal-menu-employee',
    loadChildren: () => import('./pages/user/employee/principal-menu/principal-menu.module').then( m => m.PrincipalMenuPageModule)
  },
  {
    path: 'principal-menu-technical',
    loadChildren: () => import('./pages/user/technical-resource/principal-menu/principal-menu.module').then( m => m.PrincipalMenuPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'create-result-interview',
    loadChildren: () => import('./pages/user/employee/component/create-result-interview/create-result-interview.module').then( m => m.CreateResultInterviewPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
