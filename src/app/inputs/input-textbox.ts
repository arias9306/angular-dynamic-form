import { InputBase } from '../models/input-base';

export class InputTextbox extends InputBase<string> {
  controlType = 'textbox';
  type: 'text';

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
