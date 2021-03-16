import { Component,OnInit } from '@angular/core';
import { UsersService } from "../../users.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
// import {CustomerModule} from "./customer.module"

@Component({
  selector: 'ngx-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit{
  myReactiveForm: FormGroup 
  // list:any;
  public customerList=[];
 
  constructor(private user: UsersService,private builder: FormBuilder) {}


  ngOnInit(){
    this.getCustomer(); 

    this.myReactiveForm = new FormGroup({
    id:new FormControl(''),
    fullName: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    address:new FormControl(''),
    
  })
}

onSubmit() {
  console.log(this.myReactiveForm);
  this.user.saveCustomer(this.myReactiveForm.value).subscribe((data) => {
    this.myReactiveForm.reset();
  });
}

getCustomer() {
  this.user.getCustomer().subscribe((result) => {
    console.log("Customer result", result);
    this.customerList = result["response"];
  });
}


}



