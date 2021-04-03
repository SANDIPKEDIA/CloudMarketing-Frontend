import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { BulkNotificationComponent } from './send-notifications/send-notifications.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SendGreetingComponent } from './send-greetings/send-greetings.component';
import { OfferTempComponent } from './offer-template/offer-template.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'push-notification',
        component: PushNotificationComponent,
      },
      {
        path: 'send-notifications',
        component: BulkNotificationComponent,
      },
      
      {
        path: 'send-greetings',
        component: SendGreetingComponent,
      },
      {
        path: 'offer-template',
        component: OfferTempComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

