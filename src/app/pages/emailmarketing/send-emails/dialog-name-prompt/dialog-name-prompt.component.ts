import { Component } from '@angular/core';
import { NbComponentStatus, NbDialogRef, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
// import { UsersService } from './users.service';
import { SendEmailsComponent } from '../../send-emails/send-emails.component';


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
  public email;
  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>,private user: UsersService,private toastrService: NbToastrService) {}

  
  ngOnInit() {
    this.email = localStorage.getItem('email')
    this.getNewCustomer();

    this.myReactiveForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(this.email),
      mobile: new FormControl(''),
      address: new FormControl(''),
      description: new FormControl(''),



    });
  }


  onSubmit(body) {
    
    let email = this.myReactiveForm.get("email").value;
    this.user.Email(email).subscribe((data) => {
      this.myReactiveForm.reset();
      console.log("Successfully Send Email to: ",email);
      this.makeToast();

    });
  }


  getNewCustomer() {
    this.user.getNewCustomer().subscribe((result) => {
      this.list = result["response"];
      // this.customerList.concat(this.list);
      // debugger


    });
  }
  cancel() {
    this.ref.close();
  
  }
  config: NbToastrConfig;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Email Send';
  content = `Successfully!`;

  types: NbComponentStatus[] = [
   
    'success',
   
  ];
  positions: string[] = [

    NbGlobalPhysicalPosition.TOP_RIGHT,
   
  ];
  makeToast() {
    this.showToast(this.status, this.title,this.content);
  }
  private showToast(type: NbComponentStatus, title: string,body:String) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';
    
    this.toastrService.show(
      body,
      titleContent,
      config);
  }




}
