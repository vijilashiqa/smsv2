import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
  
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path:'dasoperation',
      loadChildren: () => import('./das-operation/das-operation.module')
        .then(m => m.DASOperationModule),
    },
    {
      path:'das-administration',
      loadChildren: () => import('./das-administration/das-administration.module')
        .then(m =>m.DasAdministrationModule),
    },
    {
      path:'users',
      loadChildren: () => import('./users/users.module')
        .then(m =>m.UsersModule),
    },
    {
      path:'customer',
      loadChildren: () => import('./cutomer/cutomer.module')
        .then(m =>m.CutomerModule),
    },
    {
      path:'channelcategory',
      loadChildren: () => import('./channelcategory/channelcategory.module')
        .then(m =>m.ChannelcategoryModule),
    },
    {
      path:'inventory',
      loadChildren: () => import('./inventory/inventory.module')
        .then(m =>m.InventoryModule),
    },
    {
      path:'stbmanagement',
      loadChildren: () => import('./stbmanagement/stbmanagement.module')
        .then(m =>m.StbmanagementModule),
    },
    {
      path: 'accounts',
      loadChildren: () => import('./accounts/accounts.module')
        .then(m => m.AccountsModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },


    {
      path: 'login',
      loadChildren: () => import('./login/login.module')
        .then(m => m.LoginModule),
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
