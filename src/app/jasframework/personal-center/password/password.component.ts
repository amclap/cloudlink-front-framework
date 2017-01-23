import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'jas-password',
	encapsulation: ViewEncapsulation.None,
	template: require('./password.component.html'),
	// styles: [require('./dashboard.scss')],

})

export class PasswordComponent implements OnInit {

	public form: FormGroup;
	public password: AbstractControl;
	public confirmPassword: AbstractControl;
	public passwords: FormGroup;

	public submitted: boolean = false;
	constructor(fb: FormBuilder) { }

	ngOnInit() {
		// this.passwordService.getList().subscribe((res) => {
		// 	this.password = res;
		// });
	}
}