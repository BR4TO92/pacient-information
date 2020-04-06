import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DateUtils} from "./date-utils";
import {Moment} from "moment";

export enum DatePickerMode {
  SIMPLE = "single",
  RANGE = "range"
}

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;

  @Input() format;
  @Input() mode: DatePickerMode = DatePickerMode.SIMPLE;

  @Input() group: FormGroup;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
    this.format = this.format != null ? this.format : DateUtils.DATE_FORMAT;
  }

  updateDate(date) {
    let dateValue: Moment = date['value'];
    this.group.controls[this.controlName].setValue(dateValue.format("YYYY-MM-DD"))
  }

}
