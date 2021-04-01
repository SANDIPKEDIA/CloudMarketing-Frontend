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
import { NbDialogService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartTableData } from '../../../@core/data/smart-table';
import { DialogNamePrompttComponent } from './dialog-name-prompt/dialog-name-prompt.component';
// import { DialogNamePromptComponent } from '../../messagemanagement/send-messages/dialog-name-prompt/dialog-name-prompt.component';
// import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';


@Component({
  selector: 'ngx-bulk-messages',
  styleUrls: ['./bulk-messages.component.scss'],
  templateUrl: './bulk-messages.component.html',
})
export class SendBulkMsgComponent {

  public customerList=[];
  myReactiveForm: FormGroup;
  public list = [];
  public allList = [];
  public number;
  public selectedRows;
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private user: UsersService,private toastrService: NbToastrService,private route: ActivatedRoute, private router: Router, private service: SmartTableData,private dialogService: NbDialogService
    
  ) {}

  ngOnInit() {
    this.getCustomer();

    this.myReactiveForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(this.number),
      address: new FormControl(''),
      // number:new FormControl(this.number), 
      



    });
  }

  // onSubmit(body) {
  //   let number = this.myReactiveForm.get("number").value;
  //   this.user.Message(number).subscribe((data) => {
  //     this.myReactiveForm.reset();
  //     console.log(number);
  //     this.makeToast();

  //   });
  // }

  open3(){
    this.dialogService.open(DialogNamePrompttComponent)
    // this.onSubmit(body);
  
  }

  //Toaster
  config: NbToastrConfig;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Message Send';
  content = `Successfully!`;

  types: NbComponentStatus[] = [
   
    'success',
   
  ];
  positions: string[] = [

    NbGlobalPhysicalPosition.TOP_LEFT,
   
  ];

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
      let all =this.allList.filter(function(result){
        return result.mobile;
      })
  
      this.source.load(all);
      
    });
  }




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

 
  settings = {
    
    selectMode: 'multi',

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
      // deleteButtonContent: '<i class="nb-chat"></i><p>Send Message</p>',
      deleteButtonContent:' <p style="font-size:20px">Send Message <i class="nb-paper-plane"></i></p>',

 
      confirmDelete: true,
    },

    actions: {
      columnTitle: 'Send Message',
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
      
      // checkbox: {
      //   title: 'First Name',
      //   type: 'checkbox',
      
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
   

    this.open3();
  }
  
  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    console.log(this.selectedRows);
    
}




  



  
}
  


