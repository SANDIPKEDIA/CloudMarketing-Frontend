import { Component } from '@angular/core';
import { fruits } from './fruits-list';
import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalDataFactory } from '@akveo/ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
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
    // this.getCustomer();


    this.myReactiveForm = new FormGroup({
      // id:new FormControl(''),
      // fullName: new FormControl(''),
      // email:new FormControl(''),
      // mobile: new FormControl(''),
      // address: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),


    });
  }

  // getCustomer() {
  //   this.user.getCustomer().subscribe((result) => {
  //     console.log("Customer result", result);
  //     this.customerList = result["response"];
  //   });
  // }

  login() {
    this.user.Login(this.myReactiveForm.value).subscribe((result) => {
      console.log("Customer result", result);
      this.myReactiveForm.reset();
      this.onNavigateClick()

   
    });
  }

  onNavigateClick() {
    
    this.router.navigate(["/pages/customer"], { relativeTo: this.route })
  }


}


