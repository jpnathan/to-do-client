import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBase } from '../../shared/components';
import { AuthHttpService } from '../../services/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public formBase = FormBase;

  constructor(
    private authHttpService: AuthHttpService,
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
      this.authHttpService.auth(this.form.value)
        .then(async () => {
          await this.route.navigate(['/projects']);
        }).catch(error => {
        this.toastrService.error(error.error.message);
      });
    } catch (error) {
      console.dir(error.message);
    }
  }
}
