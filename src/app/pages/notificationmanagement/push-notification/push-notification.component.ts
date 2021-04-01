import { Component, ɵCodegenComponentFactoryResolver,TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../users.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';



import { SmartTableData } from '../../../@core/data/smart-table';
import { debug } from 'console';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteListComponent } from '../../layout/infinite-list/infinite-list.component';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';
// import { DialogNamePromptComponent } from '../../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';


@Component({
  selector: 'ngx-push-notification',
  styleUrls: ['./push-notification.component.scss'],
  templateUrl: './push-notification.component.html',
})
export class PushNotificationComponent {
  [x: string]: any;

  public customerList = [];
  myReactiveForm: FormGroup;
  public list = [];
  public allList = [];
  public allData=[];

  source: LocalDataSource = new LocalDataSource();
  public email=''


  constructor(
    private user: UsersService, private toastrService: NbToastrService, private route: ActivatedRoute, private router: Router, private service: SmartTableData,private dialogService: NbDialogService
  ) { }


  ngOnInit() {
    this.getCustomer();

    this.myReactiveForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
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

open3(){
  this.dialogService.open(DialogNamePromptComponent)
  // this.onSubmit(body);

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
    this.allData =this.allList.filter(function(result){
      return result.device_token;
    })

    this.source.load(this.allData);
    // console.log("testing",this.allData);
  });
 
  
}


  //smart

  settings = {
    
// mode:'external',
// addable: false,
// actions: false,
// hideSubHeader:true,
    add: {
      addButtonContent: '<i class="nb-email"></i><p></p>',
      createButtonContent:'<i class="nb-checkmark"></i>',
      cancelButtonContent:  '<i class="nb-close"></i>',
    
      hideSubFooter:true,
      
      confirmCreate: true,
      // columns:{
      //   fullName: {
      //     title: 'First Name',
      //     type: 'Html',
      //     editable:false, 
      //       addable: false,
            
      //       // edit:false
      //   },

      // }
      
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',

    },

    email: {
      ButtonContent: '<i class="nb-email"></i>',
      // confirmDelete: true,
    },
    delete: {
      // deleteButtonContent: '<i class="nb-bell"></i><p>Push Notification</p>',
      deleteButtonContent:' <p style="font-size:20px">Push Notification <i class="nb-notifications"></i></p>',
      confirmDelete: true,
    },

    actions: {
      columnTitle: 'Push Notification',
     
      edit: false,
      // add:false,
      // delete:false,
      add:false,

    //   custom: [
    //     { name: 'email', title: '<i class="nb-email"></i>' },


    // ],
      
    },

  remove:{
    createButtonContent:true,
  },
      



    columns: {
      // _id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      
      fullName: {
        title: 'First Name',
        type: 'Html',
        editable:false, 
          addable: false,
          hide:true,
          
          // edit:false
      },
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string',
      // },
      mobile: {
        title: 'Mobile',
        type: 'number',
        // addable: false,
        // filter: false ,  
        // addable:false              
      },
      email: {
        title: 'E-mail',
        type: 'string',
        // addable: false,
        // show:false,

        // filter: false
      },
      address: {
        title: 'Address',
        type: 'string',
        // addable: false,
        // addable:false,

        // filter.placeholder: false                 
      },

    },
  };

  onDeleteConfirm(event): void {
    // console.log(event, "event")
    this.open3();
    var data = {"fullName" : event.newData.fullName,
    "mobile" : event.newData.mobile,
    "email" : event.newData.email,
    "address": event.newData.address,

    };
    this.email = event.newData.email
    this.user.Email(this.email).subscribe((result) => {
      this.getCustomer();
  
      
    });
  }

  onCreateConfirm(): void {
    this.open3();
      // this.makeToast();


    

  }




}


