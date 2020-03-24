import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() validExtensions: string = "";

  @Input() group: FormGroup;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectFile(files: FileList) {
    this.group.controls[this.controlName].setValue(files.item(0));
  }

}
