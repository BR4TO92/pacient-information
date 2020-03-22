import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {ActivatedRoute, Router} from "@angular/router";
import {PacientServiceService} from "../pacient-service.service";

@Component({
  selector: 'app-pacient-form',
  templateUrl: './pacient-form.component.html',
  styleUrls: ['./pacient-form.component.scss']
})
export class PacientFormComponent implements OnInit {
  pacient: Pacient;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pacientService: PacientServiceService) {
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
