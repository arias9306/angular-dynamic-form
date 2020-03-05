import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../models/input-base';
import { FormGroup } from "@angular/forms";
import { InputControlService } from '../service/input-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() inputElements: InputBase<string>[] = [];
  form: FormGroup;

  constructor(private inputControlService: InputControlService) { }

  ngOnInit() {
    this.form = this.inputControlService.toFormGroup(this.inputElements);
  }


}
