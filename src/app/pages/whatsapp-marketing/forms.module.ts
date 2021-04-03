
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbAccordionModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, 
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
// import { AddCusComponent } from './customer-list/customer-list.component';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CusListomponent } from './customer-list/customer-list.component';
import {  WpComponent } from './whatsapp/whatsapp.component';
import { InstaComponent } from './instagram/insta.component';
import { GoogleComponent } from './google/google.component';
import { GaanaComponent } from './ganna/ganna.component';
// import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    
    ThemeModule,
    NbAccordionModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule, 
    NbInputModule,
    NbListModule,
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
    // ngFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    FormsComponent,
   
    ButtonsComponent,
    FormInputsComponent,
    CusListomponent,
    DatepickerComponent,
    InstaComponent,
    GoogleComponent,
    GaanaComponent,
    WpComponent

  ],
})
export class UIWpModule { }
