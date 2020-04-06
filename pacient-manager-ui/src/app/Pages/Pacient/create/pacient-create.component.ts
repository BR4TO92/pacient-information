import { Component, OnInit } from '@angular/core';
import {Pacient} from "../pacient";
import {ActivatedRoute, Router} from "@angular/router";
import {PacientCreateService} from "./pacient-create.service";
import {FormGroup} from "@angular/forms";
import {PacientCreateFormBuilder} from "./pacient-create-form.builder";
import {ValidationUtils} from "../../../utils/validation-utils";

@Component({
  selector: 'app-pacient-form',
  templateUrl: './pacient-create.component.html',
  styleUrls: ['./pacient-create.component.scss']
})
export class PacientCreateComponent implements OnInit {
  pacient: Pacient;
  pacientForm: FormGroup = new PacientCreateFormBuilder().build();
  submitPromise: Promise<Pacient>;
  genderOptions: string[] = ['male', 'female'];
  selectedGender: string = 'male';
  smokinkgStatusOptions: string[] = ['current', 'ex-smoker', 'non-smoker'];
  selectedSmokingStatus: string = 'non-smoker';
  smokingYearsOptions: Array<number> = new Array();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pacientCreateService: PacientCreateService) {
    this.pacient = new Pacient();
  }

  ngOnInit(): void {
    this.getSmokingYears(this.smokingYearsOptions);
  }

  getSmokingYears(smokingYears: Array<number>) {
    for (var year = 1; year <= 70; year++) {
      smokingYears.push(year);
    }
  }

  onSubmit() {
    if(this.pacientForm.valid) {
      const formData: FormData = new FormData();
      this.pacientForm.value.sex = this.selectedGender;
      this.pacientForm.value.smokingStatus = this.selectedSmokingStatus;
      formData.append('pacientFile', <File>this.pacientForm.value.pacientFile);
      formData.append('newPacient', new Blob([JSON.stringify(this.pacientForm.value)], {type: "application/json"}));

      this.submitPromise = this.pacientCreateService.save(formData);
    }

    else {
      ValidationUtils.markFormAsDirty(this.pacientForm);
    }
  }

  /*onSubmit() {
    if(this.pacientForm.valid) {
      this.pacientForm.value.sex = this.selectedGender;
      this.pacientForm.value.smokingStatus = this.selectedSmokingStatus;

      this.submitPromise = this.pacientCreateService.saveWithoutFile(this.pacientForm.value);
    }

    else {
      ValidationUtils.markFormAsDirty(this.pacientForm);
    }
  }*/

}
