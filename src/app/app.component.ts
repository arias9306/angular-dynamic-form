import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputSelect } from './inputs/input-select';
import { InputTextbox } from './inputs/input-textbox';
import { InputBase, KeyValue } from './models/input-base';
import { InputCheckBox } from './inputs/intput-checkbox';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-forms';
  inputElements$: Observable<InputBase<any>[]>;
  todos$: Observable<KeyValue[]>;
  ngOnInit(): void {}

  constructor(private http: HttpClient) {
    this.todos$ = this.http
      .get<KeyValue[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((response: any[]) => {
          return response.map(i => {
            let keyValue = new KeyValue();
            keyValue.key = i.id;
            keyValue.value = i.name;
            return keyValue;
          });
        })
      );


    const inputs: InputBase<any>[] = [
      new InputTextbox({
        key: 'input1',
        label: 'input 1',
        value: 'Default Value',
        order: 1,
        validators: [Validators.required],
        errorMessages: [{ key: 'required', value: 'El input1 es Requerido' }]
      }),
      new InputTextbox({
        key: 'input2',
        label: 'input 2',
        value: '',
        order: 2,
        validators: [Validators.minLength(2)],
        errorMessages: [{ key: 'minlength', value: 'Debe ser mas de 2 '}]
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
        options: of([
          { key: '1', value: 'Item 1' },
          { key: '2', value: 'Item 2' },
          { key: '3', value: 'Item 3' },
          { key: '4', value: 'Item 4' }
        ]),
        order: 4,
        validators: [Validators.required]
      }),
      new InputCheckBox({
        key: 'input5',
        label: 'checkbox',
        order: 5,
        value: true,
        validators: [Validators.required]
      }),
      new InputSelect({
        key: 'input6',
        label: 'Select Input TEST',
        options: this.todos$,
        order: 6,
        validators: [Validators.required]
      }),
      new InputTextbox({
        key: 'input7',
        label: 'Property Gorrini',
        order: 7,
        validators: [Validators.required, Validators.maxLength(2)]
      })
    ];

    this.inputElements$ = of(inputs.sort((a, b) => a.order - b.order));
  }
}
