
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { SendEmailsComponent } from './send-emails/send-emails.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BulkEmailComponent } from './bulk-emails/bulk-emails.component';
// import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    FormsModule, 
    ReactiveFormsModule
    // ngFormsModule,
  ],
  declarations: [
    FormsComponent,
    BulkEmailComponent,
    EmailCampaignComponent,
    SendEmailsComponent,
    DatepickerComponent,
  ],
})
export class UIEmailModule { }
