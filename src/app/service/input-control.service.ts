import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from '../models/input-base';

@Injectable({
  providedIn: 'root'
})
export class InputControlService {

  constructor() { }

  toFormGroup(inputs: InputBase<string>[]): FormGroup {
    let formModel: any = {};

    inputs.forEach(input => {
      formModel[input.key] = input.required
        ? new FormControl(input.value || '', Validators.required)
        : new FormControl(input.value || '');
    });

    return new FormGroup(formModel);
  }
}
