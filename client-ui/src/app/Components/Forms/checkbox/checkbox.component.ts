import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() model: string;
  @Input() group: FormGroup;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
