import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { SendEmailsComponent } from './send-emails/send-emails.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BulkEmailComponent } from './bulk-emails/bulk-emails.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'email-campaign',
        component: EmailCampaignComponent,
      },
  
      {
        path: 'send-emails',
        component: SendEmailsComponent,
      },
      {
        path: 'bulk-emails',
        component: BulkEmailComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
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

