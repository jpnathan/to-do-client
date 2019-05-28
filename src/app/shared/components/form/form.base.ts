import { AbstractControl, FormGroup } from '@angular/forms';

export class FormBase {

  public static markAsTouchedWhenFormIsInvalid (formInstance: FormGroup) {
    formInstance.markAsTouched();

    Object.keys(formInstance.controls).forEach(field => {
      const control = formInstance.controls[field];
      control.markAsTouched({ onlySelf: true });
    });

    window.scroll(0, 0);
  }

  public static checkValueIsRequired (param: AbstractControl): boolean {
    return param.getError('required') === true &&
      (param.dirty || param.touched);
  }
}
