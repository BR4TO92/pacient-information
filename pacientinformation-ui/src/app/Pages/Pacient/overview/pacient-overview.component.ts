import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {PacientOverviewService} from "./pacient-overview.service";

@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-overview.component.html',
  styleUrls: ['./pacient-overview.component.scss']
})
export class PacientOverviewComponent implements OnInit {
  pacients: Pacient[];

  constructor(private pacientOverviewService: PacientOverviewService) { }

  ngOnInit(): void {
    this.pacientOverviewService.findAll().subscribe((data) => {
      this.pacients = data;
    });
  }

}
