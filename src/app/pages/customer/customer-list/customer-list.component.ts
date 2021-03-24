import { Component } from '@angular/core';
import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalDataFactory } from '@akveo/ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
})
export class CusListomponent {
  public customerList = [];
  myReactiveForm: FormGroup;
  constructor(
    private user: UsersService,private route: ActivatedRoute, private router: Router
  ) { }

  public userObj = {
    email: '',
    password: ''
  }

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

  getCustomer() {
    this.user.getCustomer().subscribe((result) => {
      console.log("Customer result", result);
      this.customerList = result["response"];
    });
  }

  


}


