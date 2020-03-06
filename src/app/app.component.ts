import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputSelect } from './inputs/input-select';
import { InputTextbox } from './inputs/input-textbox';
import { InputBase } from './models/input-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-forms';
  inputElements$: Observable<InputBase<any>[]>;

  ngOnInit(): void {}

  constructor() {
    let inputs: InputBase<string>[] = [
      new InputTextbox({
        key: 'input1',
        label: 'input 1',
        value: '',
        order: 1,
        validators: [Validators.required]
      }),
      new InputTextbox({
        key: 'input2',
        label: 'input 2',
        value: '',
        order: 2,
        validators: [Validators.minLength(2)]
      }),
      new InputTextbox({
        key: 'input3',
        label: 'input 3',
        value: '',
        order: 3
      }),
      new InputSelect({
        key: 'input4',
        label: 'Select Input',
        options: [
          { key: '1', value: 'Item 1' },
          { key: '2', value: 'Item 2' },
          { key: '3', value: 'Item 3' },
          { key: '4', value: 'Item 4' }
        ],
        order: 4
      })
    ];

    this.inputElements$ = of(inputs.sort((a, b) => a.order - b.order));
  }
}
