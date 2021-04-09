import { Component } from '@angular/core';
import { NbComponentStatus, NbDialogRef, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
// import { UsersService } from './users.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../users.service';
import { LocalDataSource } from 'ng2-smart-table';


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
  public allData=[];
  public title;
  public devicetoken;
  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>,private user: UsersService,private toastrService: NbToastrService) {}

 
  ngOnInit() {
    // alert(this.devicetoken)
    this.getCustomer();

    this.myReactiveForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
      number: new FormControl(''),
      description: new FormControl(''),



    });

    // this.myReactiveForm.get('description').setValue(this.devicetoken)
  }


  onSubmit(body) {
    let number = this.myReactiveForm.get("number").value;
    this.user.PushNotification(number).subscribe((data) => {
      this.myReactiveForm.reset();
      console.log(number);
      this.makeToast();

    });
  }

  getCustomer() {
    this.user.getCustomer().subscribe((result) => {
      console.log("Customer result", result);
      this.customerList = result["object"]['UserList'];
      // this.source.load(this.customerList);
      // this.source.load(this.allList);
      this.getNewCustomer();

      
      
    });
  }

  getNewCustomer() {
    this.user.getNewCustomer().subscribe((result) => {
       this.list = result["response"];
      this.allList =  this.customerList.concat(this.list);
      this.allData =this.allList.filter(function(result){
        return result.device_token;
      })
  
      this.source.load(this.allData);
      
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

  // title = 'Message Send';
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
