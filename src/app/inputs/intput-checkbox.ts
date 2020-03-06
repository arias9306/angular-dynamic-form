import { InputBase, Options } from '../models/input-base';

export class InputCheckBox extends InputBase<boolean> {
  controlType = 'checkbox';

  constructor(options: Options<boolean> = {}) {
    super(options);
  }
}
