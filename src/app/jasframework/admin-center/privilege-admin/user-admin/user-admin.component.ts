import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { UserAdmin } from './shared/user-admin.model';
// import { UserAdminService } from './shared/user-admin.service';

@Component({
	selector: 'jas-user-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./user-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [UserAdminService]
})

export class UserAdminComponent implements OnInit {
	// userAdmin: UserAdmin[] = [];
	//private userAdminService: UserAdminService
	constructor() { }

	ngOnInit() {
		// this.userAdminService.getList().subscribe((res) => {
		// 	this.userAdmin = res;
		// });
	}
}