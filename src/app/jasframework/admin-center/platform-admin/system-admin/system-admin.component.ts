import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { SystemAdmin } from './shared/system-admin.model';
// import { SystemAdminService } from './shared/system-admin.service';

@Component({
	selector: 'jas-system-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./system-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [SystemAdminService]
})

export class SystemAdminComponent implements OnInit {
	// systemAdmin: SystemAdmin[] = [];
	//private systemAdminService: SystemAdminService
	constructor() { }

	ngOnInit() {
		// this.systemAdminService.getList().subscribe((res) => {
		// 	this.systemAdmin = res;
		// });
	}
}