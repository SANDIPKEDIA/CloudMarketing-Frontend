import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
// import { UsersService } from './users.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../users.service';


@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePromptComponent {

  public customerList = [];
  myReactiveForm: FormGroup;
  public list = [];
  public allList = [];
  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>,private user: UsersService,) {}

 
  ngOnInit() {
    this.getNewCustomer();

    this.myReactiveForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),



    });
  }


  onSubmit(body) {
    
    let email = this.myReactiveForm.get("email").value;
    this.user.Email(email).subscribe((data) => {
      this.myReactiveForm.reset();
      console.log(email);

    });
  }


  getNewCustomer() {
    this.user.getNewCustomer().subscribe((result) => {
      this.list = result["response"];
      // this.customerList.concat(this.list);
      debugger


    });
  }
  cancel() {
    this.ref.close();
  }



}
