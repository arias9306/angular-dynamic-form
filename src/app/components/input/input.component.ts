import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { InputBase } from 'src/app/models/input-base';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseValidations } from '../base.validations';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends BaseValidations implements OnInit  {

  @Input() input: InputBase<string>;
  @Input() form: FormGroup;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.control = this.form.controls[this.input.key] as FormControl;
    this.inputElement = this.input;
  }

}
