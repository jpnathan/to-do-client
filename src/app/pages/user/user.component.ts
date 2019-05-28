import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserHttpService } from '../../services';
import { FormBase } from '../../shared/components';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public form: FormGroup;
  public formBase = FormBase;

  constructor(
    private userHttpService: UserHttpService,
    private route: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required
      ])
    }, {
      updateOn: 'submit'
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return this.formBase.markAsTouchedWhenFormIsInvalid(this.form);
    }

    try {
      this.userHttpService.createUser(this.form.value)
        .then(result => {
          console.log(result)
          this.form.reset();
          this.route.navigate(['/']);
        }).catch(error => {
          this.toastrService.error(error.error.message);
      });
    } catch (error) {
      console.dir(error.message);
    }
  }
}
