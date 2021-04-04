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
  selector: 'ngx-contact-import',
  styleUrls: ['./contact-import.component.scss'],
  templateUrl: './contact-import.component.html',
})
export class ContactImportComponent {

  public customerList=[];
  myReactiveForm: FormGroup;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  constructor(
    private user: UsersService,private toastrService: NbToastrService
  ) {}


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

  onChange(event) {
    this.file = event.target.files[0];
}

// onUpload() {
//   this.loading = !this.loading;
//   console.log(this.file);
//   this.user.upload(this.file).subscribe(
//       (event: any) => {
//           if (typeof (event) === 'object') {

//               // Short link via api response
//               this.shortLink = event.link;

//               this.loading = false; // Flag variable 
//           }
//       }
//   );
// }

  getCustomer() {
    this.user.getCustomer().subscribe((result) => {
      console.log("Customer result", result);
      this.customerList = result["response"];
    });
  }


  //Toaster
  config: NbToastrConfig;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Customer Added';
  content = `Successfully!`;

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


  
}
  


