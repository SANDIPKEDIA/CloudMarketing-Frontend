import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../users.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    private user: UsersService,
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

  onSubmit() {
    this.user.saveCustomer(this.myReactiveForm.value).subscribe((data) => {
      this.myReactiveForm.reset();
      this.getCustomer();
    
    });
  }
  getCustomer() {
    this.user.getCustomer().subscribe((result) => {
      console.log("Customer result", result);
      this.customerList = result["response"];
    });
  }
  
}
  


