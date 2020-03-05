import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../models/input-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {

  @Input() input: InputBase<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.input.key].valid; };

  constructor() { }

  ngOnInit() {
  }

}
