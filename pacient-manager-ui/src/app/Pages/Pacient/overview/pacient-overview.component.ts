import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {PacientOverviewService} from "./pacient-overview.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-overview.component.html',
  styleUrls: ['./pacient-overview.component.scss']
})
export class PacientOverviewComponent implements OnInit {
  pacients: Pacient[];

  constructor(private pacientOverviewService: PacientOverviewService,
              private router: Router) { }

  ngOnInit(): void {
    this.pacientOverviewService.findAll().subscribe((data) => {
      this.pacients = data;
    });
  }

    goToCreatePacient() {
        this.router.navigate(['pacients/create']);
    }

}
