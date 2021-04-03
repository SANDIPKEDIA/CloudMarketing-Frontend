
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
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { BulkNotificationComponent } from './send-notifications/send-notifications.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogNamePromptComponent } from './push-notification/dialog-name-prompt/dialog-name-prompt.component';
import { DialogNamePrompttComponent } from './send-notifications/dialog-name-prompt/dialog-name-prompt.component';
import { SendGreetingComponent } from './send-greetings/send-greetings.component';
import { DialogNamePrompttComponents } from './send-greetings/dialog-name-prompt/dialog-name-prompt.component';
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
    Ng2SmartTableModule
    // ngFormsModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    PushNotificationComponent,
    BulkNotificationComponent,
    DatepickerComponent,
    DialogNamePromptComponent,
    DialogNamePrompttComponent,
    SendGreetingComponent,
    DialogNamePrompttComponents
  ],
})
export class UINotificationModule { }
