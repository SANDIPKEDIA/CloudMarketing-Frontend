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
  selector: 'ngx-push-notification',
  styleUrls: ['./push-notification.component.scss'],
  templateUrl: './push-notification.component.html',
})
export class PushNotificationComponent {
  [x: string]: any;

  public customerList=[];
  myReactiveForm: FormGroup;
  public list;
  public allList;
  constructor(
    private user: UsersService,
  ) {}


  
  ngOnInit() {
    this.getNewCustomer();


    this.myReactiveForm = new FormGroup({
      id:new FormControl(''),
      fullName: new FormControl(''),
      email:new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
  

    });
  }

  // getCustomer() {
  //   this.user.getCustomer().subscribe((result) => {
  //     console.log("Customer result from push notification", result);
  //     this.customerList = result["object"]['UserList'];
  //     this.source.load(this.customerList);
   
  //     this.getNewCustomer();

      
      
  //   });
  // }

  // getNewCustomer() {
  //   this.user.getNewCustomer().subscribe((result) => {
  //     // console.log("Customer result", result);
  //     this.list = result["response"];
  //      this.allList = this.customerList.concat(this.list)
  //     console.log("allList",this.allList);
      
  //   });
  // }
  getCustomer() {
    this.user.getCustomer().subscribe((result) => {
      console.log("Customer result", result);
      this.customerList = result["object"]['UserList'];
      this.source.load(this.customerList);
      // this.source.load(this.allList);
      this.getNewCustomer();

      
      
    });
  }

  getNewCustomer() {

    this.user.getNewCustomer().subscribe((result) => {
       this.list = result["response"];
        this.allList = this.customerList.concat(this.list);
        debugger
       console.log("New Customer Result pushhhhh",this.allList);
       
      
      
    });
  }



 
}
