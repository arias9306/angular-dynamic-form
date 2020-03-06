import { InputBase, Options } from '../models/input-base';

export class InputSelect extends InputBase<string> {
  controlType = 'select';
  options: { key: string, value: string }[] = [];

  constructor(options: Options<string> = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
