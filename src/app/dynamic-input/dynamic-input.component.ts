import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { InputBase } from '../models/input-base';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {
  @Input() input: InputBase<string>;
  @Input() form: FormGroup;
  // required: boolean = false;

  constructor() {}

  ngOnInit() {
    // this.required = this.isRequired();
  }

  get isValid(): boolean {
    return this.form.controls[this.input.key].valid;
  }

  get errors(): string {
    let message = '';
    const control = this.form.controls[this.input.key];
    if (control.invalid) {
      const errors = control.errors as ValidationErrors;
      if (this.input.errorMessages.length > 0) {
        for (const key in Object.keys(errors)) {
          if (errors.hasOwnProperty(key)) {
            message += this.input.errorMessages.find(x => x.key === key).value;
          }
        }
      }
      if (message === '') {
        message = 'This field is invalid';
      }
    }
    return message;
  }

  get isRequired() {
    const control = this.form.controls[this.input.key];
    if (this.input.validators.length > 0) {
      const validator = control.validator(control);
      return validator ? validator.required : false;
    }
    return false;
  }
}
