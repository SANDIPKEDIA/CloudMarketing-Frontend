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
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';


@Component({
  selector: 'ngx-send-notifications',
  styleUrls: ['./send-notifications.component.scss'],
  templateUrl: './send-notifications.component.html',
})
export class SendNotificationComponent {
  [x: string]: any;

  public customerList=[];
  myReactiveForm: FormGroup;
  public list;
  public allList;
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private user: UsersService,private service: SmartTableData
  ) {}


  
  ngOnInit() {
    this.getCustomer();


    this.myReactiveForm = new FormGroup({
      id:new FormControl(''),
      fullName: new FormControl(''),
      email:new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
      description:new FormControl(''),
  

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
      // this.source.load(this.customerList);
      // this.source.load(this.allList);
      this.getNewCustomer();

      
      
    });
  }

  getNewCustomer() {
    this.user.getNewCustomer().subscribe((result) => {
       this.list = result["response"];
      this.allList =  this.customerList.concat(this.list);
      // this.source.load(this.allList);
        // debugger
      //  console.log("New Customer Result",this.allList);
       
      
    });
  }



 
}
