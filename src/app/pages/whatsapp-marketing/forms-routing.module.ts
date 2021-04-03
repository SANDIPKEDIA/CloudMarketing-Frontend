import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CusListomponent } from './customer-list/customer-list.component';

import { InstaComponent } from './instagram/insta.component';
import { GoogleComponent } from './google/google.component';
import { GaanaComponent } from './ganna/ganna.component';
import { WpComponent } from './whatsapp/whatsapp.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'whatsapp-message',
        component: WpComponent,
      },
      
      {
        path: 'gaana-add',
        component: GaanaComponent,
      },
      {
        path: 'google-add',
        component: GoogleComponent,
      },
      {
        path: 'insta-add',
        component: InstaComponent,
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

