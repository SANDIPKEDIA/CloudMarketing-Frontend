import { Component } from '@angular/core';

import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalDataFactory } from '@akveo/ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  public customerList = [];
  myReactiveForm: FormGroup;
  local =""
  constructor(
    private user: UsersService,private route: ActivatedRoute, private router: Router
  ) { }

  public userObj = {
    email: '',
    password: ''
  }

  ngOnInit() {
  


    this.myReactiveForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    



    });
  }

  

  login() {
    let email = this.myReactiveForm.get("email").value;
  
    this.user.Login(this.myReactiveForm.value).subscribe((result) => {
      console.log("Customer result", result);
      this.myReactiveForm.reset();
      let details = result["object"];
      
      
      let Image = details.AdminDetails.Image;
      let Name = details.AdminDetails.fullName;
      let Id = details.AdminDetails._id;
      
      
      localStorage.setItem('authToken', JSON.stringify(details.authToken));
      localStorage.setItem('adminId', JSON.stringify(Id));
      localStorage.setItem('adminImage', JSON.stringify(Image));
      localStorage.setItem('adminName', JSON.stringify(Name));
      this.onNavigateClick()


      


   
    });
  }

  onNavigateClick() {
    
    this.router.navigate(["/pages/customer"], { relativeTo: this.route })
  }


}


