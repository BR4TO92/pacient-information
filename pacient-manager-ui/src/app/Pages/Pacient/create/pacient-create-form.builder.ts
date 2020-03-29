import {FormControl, FormGroup, Validators} from "@angular/forms";

export class PacientCreateFormBuilder {

  public build(): FormGroup {
    return new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', []),
      age: new FormControl('', []),
      pacientFile: new FormControl('', [])
    });
  }
}
