import {
  isValidControl,
  getErrorsMessage,
  isRequiredControl,
} from './validations';
import { FormControl } from '@angular/forms';
import { InputBase } from '../models/input-base';

export class BaseValidations {
  control: FormControl;
  inputElement: InputBase<any>;

  get isValid(): boolean {
    return isValidControl(this.control);
  }

  get errors(): string {
    return getErrorsMessage(
      this.inputElement,
      this.control
    );
  }

  get isRequired() {
    return isRequiredControl(
      this.control,
      this.inputElement
    );
  }
}
