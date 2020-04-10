import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() label: string;
  @Input() group: string;
  @Input() model: string;
  @Input() controlName: string;
  @Input() options: string[];
  isEnabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(option) {
    this.model = option;
    this.isEnabled = false;
  }

}
