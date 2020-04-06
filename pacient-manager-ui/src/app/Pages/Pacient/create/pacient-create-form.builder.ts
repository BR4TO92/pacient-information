import {FormControl, FormGroup} from "@angular/forms";

export class PacientCreateFormBuilder {

  public build(): FormGroup {
    return new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', []),
      age: new FormControl('', []),
      smokingStatus: new FormControl('', []),
      smokingYears: new FormControl('', []),
      pacientFile: new FormControl('', [])
    });
  }
}
