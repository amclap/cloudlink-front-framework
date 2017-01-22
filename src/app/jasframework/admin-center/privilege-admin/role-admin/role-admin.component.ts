import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { RoleAdmin } from './shared/role-admin.model';
// import { RoleAdminService } from './shared/role-admin.service';

@Component({
	selector: 'jas-role-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./role-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [RoleAdminService]
})

export class RoleAdminComponent implements OnInit {
	// roleAdmin: RoleAdmin[] = [];
	//private roleAdminService: RoleAdminService
	constructor() { }

	ngOnInit() {
		// this.roleAdminService.getList().subscribe((res) => {
		// 	this.roleAdmin = res;
		// });
	}
}