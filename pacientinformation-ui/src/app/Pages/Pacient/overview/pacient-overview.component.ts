import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {PacientService} from "../pacient.service";

@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-overview.component.html',
  styleUrls: ['./pacient-overview.component.scss']
})
export class PacientOverviewComponent implements OnInit {
  pacients: Pacient[];

  constructor(private pacientService: PacientService) { }

  ngOnInit(): void {
    this.pacientService.findAll().subscribe((data) => {
      this.pacients = data;
    });
  }

}
