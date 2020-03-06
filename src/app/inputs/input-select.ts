import { InputBase, Options, KeyValue } from '../models/input-base';
import { Observable, of } from 'rxjs';

export class InputSelect extends InputBase<string> {
  controlType = 'select';
  options: Observable<KeyValue[]>;

  constructor(options: Options<string> = {}) {
    super(options);
    this.options = options['options'] || of([]);
  }
}
