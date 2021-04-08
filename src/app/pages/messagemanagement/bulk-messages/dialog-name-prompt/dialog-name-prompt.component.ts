import { Component } from '@angular/core';
import { NbComponentStatus, NbDialogRef, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
// import { UsersService } from './users.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../users.service';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { LOADIPHLPAPI } from 'dns';


@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePrompttComponent {

  public customerList = [];
  myReactiveForm: FormGroup;
  public list = [];
  public allList = [];
  public number;
  public bulkmessage;
  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<DialogNamePrompttComponent>,private service: SmartTableData,private user: UsersService,private toastrService: NbToastrService) {}


      
  
  ngOnInit() {
  
    this.getNewCustomer();
    this.myReactiveForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(),
      address: new FormControl(''),
      message: new FormControl(''),
      description: new FormControl(''),


    });
      this.myReactiveForm.get('mobile').setValue(this.bulkmessage)
  }
  onSubmit(body) {
    // let number = this.myReactiveForm.get("mobile").value;
    // this.user.Message(number).subscribe((data) => {
    //   this.myReactiveForm.reset();
    //   console.log("body",number);
    //   this.makeToast();
    // });

    this.bulkmessage.forEach((event)=>{
      let number = event
      // debugger
    this.user.Message(event).subscribe((data) => {
      this.myReactiveForm.reset();
      console.log("body",number);
      this.makeToast();

    });
  })
  }

  getNewCustomer() {
    this.user.getNewCustomer().subscribe((result) => {
      this.list = result["response"];
      // this.customerList.concat(this.list);
     
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

  title = 'Message Send';
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
      // deleteButtonContent: '<i class="nb-chat"></i><p>Send Message</p>',
      deleteButtonContent:' <p style="font-size:20px">Send Message <i class="nb-paper-plane"></i></p>',

 
      confirmDelete: true,
    },

    actions: {
      columnTitle: 'Send Message',
      add: false, 
      edit: false,
      content: false,
      // delete:false,
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

  // onDeleteConfirm(event): void {
  //   // console.log(event, "event")
  //    this.number = event.data.mobile
  //    console.log(this.number);
  //  this.user.Message(this.number).subscribe((result)=>{
     
  //     console.log("sended message to",this.number);
  //  })
  // }
   
    // console.log(number);
    

  







}
