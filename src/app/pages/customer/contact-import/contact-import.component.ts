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
import { HttpClient } from '@angular/common/http';
// import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'ngx-contact-import',
  styleUrls: ['./contact-import.component.scss'],
  templateUrl: './contact-import.component.html',
})
export class ContactImportComponent {


  // public afuConfig = {
  //   uploadAPI: {
  //     url: "https://example-file-upload-api"
  //   }
  // };
  public csvRead;
  selectedFile = null;
  public fullName;
  public Email;
  public number;
  public url = ""
  public customerList = [];
  myReactiveForm: FormGroup;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  constructor(
    private user: UsersService, private toastrService: NbToastrService, private http: HttpClient,
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


  getCustomer() {
    this.user.getCustomer().subscribe((result) => {
      console.log("Customer result", result);
      this.customerList = result["response"];
    });
  }


  //Toaster
  config: NbToastrConfig;
  destroyByClick = true;
  duration = 5000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Customer Added';
  title1 = 'File Uploaded'
  content = `Successfully!`;

  types: NbComponentStatus[] = [

    'success',

  ];
  positions: string[] = [

    NbGlobalPhysicalPosition.TOP_LEFT,

  ];





  //Toaster
  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }
  private showToast(type: NbComponentStatus, title: string, body: String) {
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
//Toaster2
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




  //File uploaded /Csv File Read and with CSv value Add Customer
  onChange(event) {
    this.file = event.target.files[0];
    // debugger
  }
  onUpload() {
    console.log(this.file);
    let formData = new FormData();
    formData.append('file', this.file);
    this.user.uploadFile(formData).subscribe((result) => {
      console.log("result", result);
      this.makeToast2();
      this.csvRead = result['response']
      console.log("After Reading csv file", this.csvRead);
      this.csvRead.forEach((val) => {

        this.Email = val.Email;
        this.number = val.Phone;
        
        // // debugger
        

        this.customerAdd();
      })

    });
  }

  customerAdd() {
    this.csvRead.forEach((event) => {
      // debugger
      var data =
      {
        "fullName": event.FullName,
        "mobile": event.Phone,
        "email": event.Email,
        "address": event.Address,

      };

      this.user.saveCustomer(data).subscribe((data) => {
        this.myReactiveForm.reset();
        this.getCustomer();
        this.makeToast();
      });
    });
  }






}



