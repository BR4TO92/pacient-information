import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() type: string = 'text';

  @Input() name: string;
  @Input() label: string;

  @Input() group: FormGroup;
  @Input() controlName: string;
  @Input() readonly: boolean = false;

  @Input() model: string;

  constructor() { }

  ngOnInit(): void {
  }

}
