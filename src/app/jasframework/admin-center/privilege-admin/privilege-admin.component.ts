import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
	selector: 'jas-privilege-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./privilege-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [ProductCenterService]

})

export class PrivilegeAdminComponent implements OnInit {
	constructor() { }
	ngOnInit() {
	}
}