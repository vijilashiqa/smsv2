import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,

  
} from '@nebular/auth';


import { LoginComponent } from './loginc/loginc.component';


export const routes: Routes = [
  
   
    {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      // {
      //   path: 'login',
      //   component: NbLoginComponent,
      // }, 
      // {
      //   path: 'register',
      //   component: NbRegisterComponent,
      // },
      {
        path: 'logout',
        component: LoginComponent,
      },
      // {
      //   path: 'request-password',
      //   component: NbRequestPasswordComponent,
      // },
      // {
      //   path: 'reset-password',
      //   component: NbResetPasswordComponent,
      // },
    ],
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
