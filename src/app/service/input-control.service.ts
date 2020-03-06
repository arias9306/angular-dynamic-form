import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from '../models/input-base';

@Injectable({
  providedIn: 'root'
})
export class InputControlService {

  constructor() { }

  toFormGroup(inputs: InputBase<string>[]): FormGroup {
    const formModel: any = {};

    inputs.forEach(input => {
      formModel[input.key] = input.validators.length > 0
        ? new FormControl(input.value || '', [...input.validators])
        : new FormControl(input.value || '');
    });

    return new FormGroup(formModel);
  }
}
