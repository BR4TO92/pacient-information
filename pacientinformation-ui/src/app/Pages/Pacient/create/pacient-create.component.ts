import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {ActivatedRoute, Router} from "@angular/router";
import {PacientCreateService} from "./pacient-create.service";

@Component({
  selector: 'app-pacient-form',
  templateUrl: './pacient-create.component.html',
  styleUrls: ['./pacient-create.component.scss']
})
export class PacientCreateComponent implements OnInit {
  pacient: Pacient;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pacientCreateService: PacientCreateService) {
    this.pacient = new Pacient();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.pacientCreateService.save(this.pacient).subscribe((result) => this.goToPacientList());
  }

  goToPacientList() {
    this.router.navigate(['/pacients']);
  }

}
