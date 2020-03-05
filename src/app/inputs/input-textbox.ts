import { InputBase } from '../models/input-base';

export class InputTextbox extends InputBase<string> {
  controlType = 'textbox';
  type: 'text';
  icon: '';

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.icon = options['icon'] || '';
  }
}
