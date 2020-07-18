import { InputBase, Options } from '../models/input-base';

export class InputTextbox extends InputBase<string> {
  controlType = 'textbox';
  type: string;
  icon: string;

  constructor(
    options: Options<string> = {}
  ) {
    super(options);
    this.type = options.type || '';
    this.icon = options.icon || undefined;
  }
}
