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
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { TagModel } from 'ngx-chips/core/accessor';


@Component({
  selector: 'ngx-add-customer',
  styleUrls: ['./add-customer.component.scss'],
  templateUrl: './add-customer.component.html',
})
export class AddCusComponent {

  public asoList = [];
  myReactiveForm: FormGroup;
  items = ['Pizza', 'Pasta', 'Parmesan'];
  constructor(
    private user: UsersService, private toastrService: NbToastrService
  ) { }


  ngOnInit() {
    this.getSeo();


    this.myReactiveForm = new FormGroup({
      id: new FormControl(''),
      web_url: new FormControl(''),
      website_name: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      owner_id: new FormControl(''),
      tag: new FormControl(''),




    });
  }
  public onAdding(tag: TagModel) {
    const confirm = window.confirm('Do you really want to add this tag?');
   
}

  onSubmit() {
    this.user.saveSeo(this.myReactiveForm.value).subscribe((data) => {
      this.myReactiveForm.reset();
      this.getSeo();
      this.makeToast();


    });
  }
  getSeo() {
    this.user.getSeo().subscribe((result) => {
      console.log("Seo result", result);
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

  title = 'Seo Added';
  content = `Successfully!`;

  types: NbComponentStatus[] = [

    'success',

  ];
  positions: string[] = [

    NbGlobalPhysicalPosition.TOP_LEFT,

  ];





  //Toaster
  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }
  private showToast(type: NbComponentStatus, title: string, body: String) {
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





