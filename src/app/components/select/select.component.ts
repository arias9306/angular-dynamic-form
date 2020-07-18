import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from 'src/app/models/input-base';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() input: InputBase<string>;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void { }

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
