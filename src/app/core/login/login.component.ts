import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, public router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      if (this.email.value == 'amc_lap@163.com') {
        console.log("登陆成功!");
        localStorage.setItem("userName", this.email.value);
        // this.router.navigateByUrl('/cloudlink');
        this.router.navigateByUrl('/cloudlink');
        console.log(this.router);
        console.log("转向成功！");
      }
      // your code goes here
      // console.log(values);
    }
  }
}
