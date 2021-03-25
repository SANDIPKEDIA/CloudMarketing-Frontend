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
  selector: 'ngx-send-messsages',
  styleUrls: ['./send-messsages.component.scss'],
  templateUrl: './send-messsages.component.html',
})
export class SendMsgComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    private user: UsersService,private toastrService: NbToastrService
  ) {}


  ngOnInit() {
    


    this.myReactiveForm = new FormGroup({
      number: new FormControl(''),
      description:new FormControl(''),
    
  

    });
  }

  onSubmit(body) {
    let number = this.myReactiveForm.get("number").value;
    this.user.Message(number).subscribe((data) => {
      this.myReactiveForm.reset();
      console.log(number);
      this.makeToast();

   


    });
  }

  //Toaster
  config: NbToastrConfig;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_LEFT;
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
  


