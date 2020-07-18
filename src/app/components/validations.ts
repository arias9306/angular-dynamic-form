import { FormControl, ValidationErrors } from '@angular/forms';
import { InputBase } from '../models/input-base';

export function isValidControl(control: FormControl): boolean {
  return control.valid;
}


export function getErrorsMessage(input: InputBase<any>, control: FormControl): string {
  let message = '';
  if (control.invalid) {
    const errors = control.errors as ValidationErrors;
    if (input.errorMessages.length > 0 && errors) {
      const keyErrors = Object.keys(errors) as string[];
      for (const key of keyErrors) {
          message += input.errorMessages.find(x => x.key === key)?.value;
      }
    }
    if (message === '') {
      message = 'This field is invalid';
    }
  }
  return message;
}

export function isRequiredControl(control: FormControl, input: InputBase<any>) {
    if (input.validators.length > 0) {
      const validator = control.validator(control);
      return validator ? validator.required : false;
    }
    return false;
}
