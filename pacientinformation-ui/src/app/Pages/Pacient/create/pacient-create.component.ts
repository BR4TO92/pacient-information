import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {ActivatedRoute, Router} from "@angular/router";
import {PacientService} from "../pacient.service";

@Component({
  selector: 'app-pacient-form',
  templateUrl: './pacient-create.component.html',
  styleUrls: ['./pacient-create.component.scss']
})
export class PacientCreateComponent implements OnInit {
  pacient: Pacient;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pacientService: PacientService) {
    this.pacient = new Pacient();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.pacientService.save(this.pacient).subscribe((result) => this.goToPacientList());
  }

  goToPacientList() {
    this.router.navigate(['/pacients']);
  }

}
