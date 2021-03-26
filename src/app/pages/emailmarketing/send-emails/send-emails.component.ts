import { Component, ɵCodegenComponentFactoryResolver,TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../users.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';


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
// import { DialogNamePromptComponent } from '../../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';


@Component({
  selector: 'ngx-send-emails',
  styleUrls: ['./send-emails.component.scss'],
  templateUrl: './send-emails.component.html',
})
export class SendEmailsComponent {

  public customerList = [];
  myReactiveForm: FormGroup;
  public list = [];
  public allList = [];
  source: LocalDataSource = new LocalDataSource();


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
      // debugger
    //  console.log("New Customer Result",this.allList);
     
    
  });
}


  //smart

  settings = {
    

    add: {
      addButtonContent: '<i class="nb-email"></i>',
      createButtonContent: '',
      cancelButtonContent: '',
      // confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },

    email: {
      addButtonContent: '<i class="nb-email"></i>',
      // confirmDelete: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-email"></i>',
      confirmDelete: true,
    },

    actions: {
      columnTitle: 'Send Email',
      add: false,
      edit: false,
      content: false,
      delete:false,
      defaultStyle: false
      



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
      mobile: {
        title: 'Mobile',
        type: 'number',
      },
      email: {
        title: 'E-mail',
        type: 'string',
        // filter: false
      },
      address: {
        title: 'Address',
        type: 'string',
        // filter: false                 
      },

    },
  };





  onDeleteConfirm(event): void {
    console.log(event, "event")
  }

  onCreateConfirm(event): void {
    this.user.saveCustomer(this.myReactiveForm.value).subscribe((data) => {
      this.myReactiveForm.reset();
      this.getCustomer();
      // this.makeToast();


    });

  }




}



