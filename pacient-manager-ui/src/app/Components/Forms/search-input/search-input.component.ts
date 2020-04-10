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

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data: string): void {
    this.model = data;
  }

}
