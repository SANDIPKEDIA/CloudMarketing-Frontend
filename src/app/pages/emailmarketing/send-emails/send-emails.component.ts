import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../users.service';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';


@Component({
  selector: 'ngx-send-emails',
  styleUrls: ['./send-emails.component.scss'],
  templateUrl: './send-emails.component.html',
})
export class SendEmailsComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    private user: UsersService,private toastrService: NbToastrService
  ) {}


  ngOnInit() {
    


    this.myReactiveForm = new FormGroup({
      email: new FormControl(''),
      description:new FormControl(''),
    
  

    });
  }

  onSubmit(body) {
    let email = this.myReactiveForm.get("email").value;
    this.user.Email(email).subscribe((data) => {
      this.myReactiveForm.reset();
      console.log(email);

   


    });
  }
 
  
}
  


