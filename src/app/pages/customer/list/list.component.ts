import { Component } from '@angular/core';
import { fruits } from './fruits-list';
import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
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

  getCustomer() {
    this.user.getCustomer().subscribe((result) => {
      console.log("Customer result", result);
      this.customerList = result["response"];
    });
  }
}
