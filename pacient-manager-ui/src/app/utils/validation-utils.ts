
import {AbstractControl, FormGroup} from "@angular/forms";
import {ComponentError} from "./component-error";

export class ValidationUtils {

  public static determineErrorMessage(control: AbstractControl) {
    let componentError = new ComponentError();

    if (control.errors) {
      let errorKeys = Object.keys(control.errors);
      let errorKey = errorKeys[0];

      if (errorKey === 'minlength') {
        componentError.message = 'validation.minlength';
        componentError.argument = control.errors.minlength.requiredLength;
      } else if (errorKey === 'maxlength') {
        componentError.message = 'validation.maxlength';
        componentError.argument = control.errors.maxlength.requiredLength;
      } else if (errorKey === 'minNumber') {
        componentError.message = 'validation.minNumber';
        componentError.argument = control.errors.minNumber.minValue;
      } else if (errorKey === 'maxNumber') {
        componentError.message = 'validation.maxNumber';
        componentError.argument = control.errors.maxNumber.maxValue;
      } else if (errorKey === 'maxLength') {
        componentError.message = 'validation.maxLength';
        componentError.argument = control.errors.maxLength.maxValue;
      } else if (errorKey === 'email') {
        componentError.message = 'validation.email';
      } else if (errorKey === 'customPattern') {
        componentError.message = control.errors.customPattern.message;
      } else if (errorKey === 'valueMatcher') {
        componentError.message = control.errors.valueMatcher.message;
      } else if (errorKey === 'min') {
        componentError.message = 'validation.minvalue';
        componentError.argument = control.errors.min.min;
      } else if (errorKey === 'max') {
        componentError.message = 'validation.maxvalue';
        componentError.argument = control.errors.max.max;
      } else {
        componentError.message = 'Validation error.' + errorKeys[0];
      }
    }

    return componentError;
  }

  public static markFormAsDirty(form: FormGroup) {
    for (const fieldName in form.controls) {
      const control = form.get(fieldName);
      control.markAsDirty();
    }
  }
}
