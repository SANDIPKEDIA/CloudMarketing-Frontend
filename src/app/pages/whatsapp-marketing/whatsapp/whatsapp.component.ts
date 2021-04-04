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
import { messages } from '../../extra-components/chat/messages';


@Component({
  selector: 'ngx-whatsapp',
  styleUrls: ['./whatsapp.component.scss'],
  templateUrl: './whatsapp.component.html',
})
export class WpComponent {

  public asoList=[];
  myReactiveForm: FormGroup;
public whatsapp;
public message;
  constructor(
    private user: UsersService,private toastrService: NbToastrService
  ) {}


  ngOnInit() {
    this.getAso();


    this.myReactiveForm = new FormGroup({
     
      number: new FormControl(''),
      message: new FormControl(''),
   
  

    });
  }

  onSubmit() {
   
      this.whatsapp = this.myReactiveForm.get('number').value;
      this.message = this.myReactiveForm.get('message').value;

      var win = window.open(`https://api.whatsapp.com/send?phone=91+${this.whatsapp}&text=${this.message}&source=&data=`, '_blank');
      this.myReactiveForm.reset();
      
  }
    
  
  getAso() {
    this.user.getAso().subscribe((result) => {
      console.log("Aso result", result);
      this.asoList = result["response"];
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

  title = '';
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
  


