import { ValidatorFn } from '@angular/forms';

export class InputBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  type: string;
  icon: string;
  validators: ValidatorFn[];
  options: { key: string, value: string }[];

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    order?: number,
    controlType?: string,
    type?: string,
    icon?: string;
    validators?: ValidatorFn[]
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.icon = options.icon || '';
    this.validators = options.validators || [];
  }
}