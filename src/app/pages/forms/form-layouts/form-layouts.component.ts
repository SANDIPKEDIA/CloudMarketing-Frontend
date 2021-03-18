import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {


  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) {
    this._createForm();
  }


  private _createForm() {
    this.form = this._fb.group({
      id: [''],
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      description: [''],
    });
  }

  submit(form){
    console.log(form.value,"form")

  }

}
