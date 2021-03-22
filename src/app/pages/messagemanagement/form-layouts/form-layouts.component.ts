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
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {

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

   


    });
  }
 
  
}
  


