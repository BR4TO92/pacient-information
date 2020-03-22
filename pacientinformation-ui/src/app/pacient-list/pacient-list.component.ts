import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {PacientServiceService} from "../pacient-service.service";

@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-list.component.html',
  styleUrls: ['./pacient-list.component.scss']
})
export class PacientListComponent implements OnInit {
  pacients: Pacient[];

  constructor(private pacientService: PacientServiceService) { }

  ngOnInit(): void {
    this.pacientService.findAll().subscribe((data) => {
      this.pacients = data;
    });
  }

}
