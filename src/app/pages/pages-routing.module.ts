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
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.UIFormsModule),
    },
    {
      path: 'customer',
      loadChildren: () => import('./customer/forms.module')
        .then(m => m.UICusModule),
    },
    {
      path: 'aso',
      loadChildren: () => import('./aso/forms.module')
        .then(m => m.UIAsoModule),
    },
    {
      path: 'seo',
      loadChildren: () => import('./seo/forms.module')
        .then(m => m.UISeoModule),
    },
    {
      path: 'whatsapp-marketing',
      loadChildren: () => import('./whatsapp-marketing/forms.module')
        .then(m => m.UIWpModule),
    },
    {
      path: 'auth',
      loadChildren: () => import('./authh/forms.module')
        .then(m => m.UIAuthhModule),
    },
    {
      path: 'addmanagement',
      loadChildren: () => import('./addmanagement/forms.module')
        .then(m => m.UIAddsModule),
    },
    {
      path: 'messagemanagement',
      loadChildren: () => import('./messagemanagement/forms.module')
        .then(m => m.UIMsgModule),
    },
    {
      path: 'emailmarketing',
      loadChildren: () => import('./emailmarketing/forms.module')
        .then(m => m.UIEmailModule),
    },
    {
      path: 'notificationmanagement',
      loadChildren: () => import('./notificationmanagement/forms.module')
        .then(m => m.UINotificationModule),
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
