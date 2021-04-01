
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';



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
import { SendBulkEmailsComponent } from './bulk-emails/bulk-emails.component';
import { DialogNamePromptComponent } from './send-emails/dialog-name-prompt/dialog-name-prompt.component';
import { DialogNamePrompttComponent } from './bulk-emails/dialog-name-prompt/dialog-name-prompt.component';
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
    ReactiveFormsModule,
    Ng2SmartTableModule,
    // ngFormsModule,
  ],
  declarations: [
    FormsComponent,
    // BulkEmailComponent,
    EmailCampaignComponent,
    SendEmailsComponent,
    DatepickerComponent,
    DialogNamePromptComponent,
    SendBulkEmailsComponent,
    DialogNamePrompttComponent

  ],
})
export class UIEmailModule { }
