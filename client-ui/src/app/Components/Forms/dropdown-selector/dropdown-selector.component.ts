import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrls: ['./dropdown-selector.component.scss']
})
export class DropdownSelectorComponent implements OnInit {
  @Input() label: string;
  @Input() model: any;
  @Input() name: string;

  @Input() group: FormGroup;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
