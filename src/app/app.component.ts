import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InputBase } from './models/input-base';
import { InputTextbox } from './inputs/input-textbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-forms';
  inputElements$: Observable<InputBase<any>[]>;

  ngOnInit(): void {

  }

  constructor() {

    let inputs: InputBase<string>[] = [
       new  InputTextbox({
          key: 'input1',
          label: 'input 1',
          value: '',
          order: 1
       })
    ];

    this.inputElements$ = of(inputs.sort((a, b) => a.order - b.order));

  }

}
