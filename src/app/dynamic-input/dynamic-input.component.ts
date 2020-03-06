import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../models/input-base';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {
  @Input() input: InputBase<string>;
  @Input() form: FormGroup;

  required: boolean = false;

  get isValid() {
    return this.form.controls[this.input.key].valid;
  }

  private isRequired() {
    if (this.input.validators.length > 0) {
      const control = this.form.controls[this.input.key];
      var validator = control.validator(control);
      console.log(validator);
      return validator ? validator.required : false;
    }
    return false;
  }

  constructor() {}

  ngOnInit() {
    this.required = this.isRequired();
  }
}
