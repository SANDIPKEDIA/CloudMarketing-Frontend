import { Component } from '@angular/core';
import { UsersService } from '../../../users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalDataFactory } from '@akveo/ng2-completer';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
})
export class CusListomponent {
  public customerList = [];
  source: LocalDataSource = new LocalDataSource();
  myReactiveForm: FormGroup;
  constructor(
    private user: UsersService,private route: ActivatedRoute, private router: Router,private service: SmartTableData
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
      this.customerList = result["object"]['UserList'];
      this.source.load(this.customerList);
      this.getNewCustomer();
    });
  }

  getNewCustomer() {
    // this.user.getNewCustomer().subscribe((result) => {
    //   let list = result["response"];
    //   this.customerList.concat(list);
    // });
  }



  //smart

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
          },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      // _id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      fullName: {
        title: 'First Name',
        type: 'string',
      },
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string',
      // },
      mobile: {
        title: 'Mobile',
        type: 'number',
      },
      email: {
        title: 'E-mail',
        type: 'string',
        filter: false
      },
      address: {
        title: 'Address',
        type: 'string',
        filter: false
      },
    },
  };



  

  onDeleteConfirm(event): void {
    console.log(event,"event")
  }






}


