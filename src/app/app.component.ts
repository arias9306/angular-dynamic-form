import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { InputTextbox } from "./inputs/input-textbox";
import { InputBase } from "./models/input-base";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angular-dynamic-forms";
  inputElements$: Observable<InputBase<any>[]>;

  ngOnInit(): void {}

  constructor() {
    let inputs: InputBase<string>[] = [
      new InputTextbox({
        key: "input1",
        label: "input 1",
        value: "",
        order: 1
      }),
      new InputTextbox({
        key: "input2",
        label: "input 2",
        value: "",
        order: 2
      }),
      new InputTextbox({
        key: "input3",
        label: "input 3",
        value: "",
        order: 3
      })
    ];

    this.inputElements$ = of(inputs.sort((a, b) => a.order - b.order));
  }
}
