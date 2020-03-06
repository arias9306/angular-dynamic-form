import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class InputBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  type: string;
  icon: string;
  validators: ValidatorFn[];
  options: Observable<KeyValue[]>;
  errorMessages: KeyValue[];

  constructor(options: Options<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.icon = options.icon || '';
    this.validators = options.validators || [];
    this.errorMessages = options.errorMessages || [];
  }
}

export class Options<T> {
  value?: T;
  key?: string;
  label?: string;
  order?: number;
  controlType?: string;
  type?: string;
  icon?: string;
  validators?: ValidatorFn[];
  options?: Observable<KeyValue[]>;
  errorMessages?: KeyValue[];
}

export class KeyValue {
  key: string;
  value: string;
}
