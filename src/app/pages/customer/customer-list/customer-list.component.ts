import { Component } from '@angular/core';
import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalDataFactory } from '@akveo/ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

import { SmartTableData } from '../../../@core/data/smart-table';
// import { debug } from 'console';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
})
export class CusListomponent {
  public customerList = [];
  public list = [];
  public allList = [];
  source: LocalDataSource = new LocalDataSource();
  public event =''
  public selectedRows;
  myReactiveForm: FormGroup;
  constructor(
    private user: UsersService,private route: ActivatedRoute, private router: Router,private service: SmartTableData,private toastrService: NbToastrService
  ) { }

  public userObj = {
    email: '',
    password: ''
  }

  ngOnInit() {
    this.getCustomer();
    

    


    this.myReactiveForm = new FormGroup({
      id:new FormControl(''),
      fullName: new FormControl(''),
      email:new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
      


    });
  }

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
      this.allList =  this.customerList.concat(this.list);
      this.source.load(this.allList);
        // debugger
      //  console.log("New Customer Result",this.allList);
       
      
    });
  }



  //smart

  settings = {
    selectMode: 'multi',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      
          },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
     
    },
    actions: {

      delete: false,
      add:false,
  
    
      
  },
    columns: {
      // _id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      fullName: {
        title: 'First Name',
        type: 'string',
      },
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string',
      // },
      // checkbox: {
      //   title: 'Check Box',
      //   // type: 'html',
      //   // // valuePrepareFunction: (value) => { return this._sanitizer.bypassSecurityTrustHtml(this.input); },
      //   // filter: false
      //   selectMode: 'multi',

      // },
      mobile: {
        title: 'Mobile',
        type: 'Number',
      },
      email: {
        title: 'E-mail',
        type: 'string',
        // filter: false
        // editable:false,
        // addtable:false,
        // hide:true
      },
      address: {
        title: 'Address',
        type: 'string',
        // filter: false  
                       
      },
    },
  };



  

  onDeleteConfirm(event): void {
    console.log(event,"event")
  }

  onCreateConfirm(event) {
    var data = {"fullName" : event.newData.fullName,
    "mobile" : event.newData.mobile,
    "email" : event.newData.email,
    "address": event.newData.address,

    };
    this.user.saveCustomer(data).subscribe((result) => {
      // this.myReactiveForm.reset();
      this.getCustomer();
      console.log(result);
    
      // console.log(event);
      
      this.makeToast();
    });
   
  }

  onUpdateConfirm(event) {
    var data = {"fullName" : event.newData.fullName,
    "mobile" : event.newData.mobile,
    "email" : event.newData.email,
    "address": event.newData.address,

    };
    let id = event.newData._id
    this.user.editCustomer(data,id).subscribe((result) => {
      this.getCustomer();
      console.log("Succesfull",result);
      this.makeToast2()
    });

   }

   onUserRowSelect(event) {
    this.selectedRows = event.selected;
    console.log(this.selectedRows);
    
}
// onClick() {
//   // It will console all the selected rows
//   console.log(this.selectedRows);
// }

  





//TOASTER

config: NbToastrConfig;
destroyByClick = true;
duration = 6000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';

title = 'Customer Added';
content = `Successfully!`;
title1 = 'Customer Updated';
content1 = `Successfully!`;

types: NbComponentStatus[] = [
 
  'success',
 
];
positions: string[] = [

  NbGlobalPhysicalPosition.TOP_LEFT,
 
];





//Toaster
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

makeToast2() {
  this.showToast2(this.status, this.title,this.content);
}
private showToast2(type: NbComponentStatus, title: string,body:String) {
  const config = {
    status: type,
    destroyByClick: this.destroyByClick,
    duration: this.duration,
    hasIcon: this.hasIcon,
    position: this.position,
    preventDuplicates: this.preventDuplicates,
  };
  const titleContent = this.title1 ? `${this.title1}` : '';
  
  this.toastrService.show(
    body,
    titleContent,
    config);
}



}


