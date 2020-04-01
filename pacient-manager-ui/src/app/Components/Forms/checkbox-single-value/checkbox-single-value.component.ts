import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkbox-single-value',
  templateUrl: './checkbox-single-value.component.html',
  styleUrls: ['./checkbox-single-value.component.scss']
})
export class CheckboxSingleValueComponent implements OnInit {
  @Input() options: string[];
  @Input() selectedValue: string;
  @Input() label: string;
  @Output() selectedValueChange = new EventEmitter<string>();

  private toggle: {[key: string]: string};

  constructor() { }

  ngOnInit(): void {
    this.toggle = {
      [this.options[0]]: this.options[1],
      [this.options[1]]: this.options[0]
    };
  }

  onChangeOption(option: string, isChecked: boolean) {
    this.selectedValue = isChecked ? option : this.toggle[option];
    this.selectedValueChange.emit(this.selectedValue);
  }

}
